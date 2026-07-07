"use client";

import React, { useEffect, useRef, useState } from 'react';
import * as Blockly from 'blockly/core';
import * as libraryBlocks from 'blockly/blocks';
import { javascriptGenerator } from 'blockly/javascript';
import * as En from 'blockly/msg/en';
import Link from 'next/link';

Blockly.setLocale(En);

export default function AssemblyEditor() {
    const blocklyDiv = useRef(null);
    const [nasmCode, setNasmCode] = useState("");

    const [registers, setRegisters] = useState({rax: 0, rbx: 0, rcx: 0, rdx: 0}); // 4 registers
    const [memory, setMemory] = useState(Array(16).fill(0))                       // 16 memory loc

    useEffect(() => {
        if (!blocklyDiv.current) return;

        // BLOCK DEFINITIONS //

        // ret block
        Blockly.Blocks['ret'] = {
            init: function() {
                this.appendDummyInput()
                    .appendField("ret");
                this.setPreviousStatement(true, null);
            }
        }

        // segment block
        Blockly.Blocks['section'] = {
            init: function() {
                this.appendEndRowInput()
                    .appendField("section")
                    .appendField(new Blockly.FieldDropdown([[".data", "DATA"], [".bss", "BSS"], [".text", "TEXT"]]), "SECTION");
                this.appendStatementInput("CODE").appendField();
                this.setColour(300);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip("Define the basic structure of your SASM assembler program.");
            }
        }

        // MOV REG, REG/CONST block
        Blockly.Blocks['mov_reg'] = {
            init: function() {
                this.appendDummyInput("INPUT_ROW")
                    .appendField("MOV")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"]]), "DEST")
                    .appendField(",")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"], ["Custom", "CUSTOM"]]), "SRC_DROP")
                    .appendField(new Blockly.FieldLabel("0x"), "HEX_PREFIX")
                    .appendField(new Blockly.FieldTextInput("0"), "HEX_VALUE"); 

                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(210);
                this.setTooltip("Move contents of source register into destination register.");

                // Hide text fields for now
                this.getField("HEX_PREFIX").setVisible(false);
                this.getField("HEX_VALUE").setVisible(false);

                this.setOnChange(function(event) {
                // check for changes in MOV block
                if (event.type === Blockly.Events.BLOCK_CHANGE && event.blockId === this.id) {
                    // if change was made in drop down
                    if (event.name === "SRC_DROP") {
                        const dropdownField = this.getField("SRC_DROP");
                        const prefixField = this.getField("HEX_PREFIX");
                        const valueField = this.getField("HEX_VALUE");

                        // if custom text
                        if (event.newValue === "CUSTOM") {
                            dropdownField.setVisible(false);
                            prefixField.setVisible(true);
                            valueField.setVisible(true);
                        } else {
                            dropdownField.setVisible(true);
                            prefixField.setVisible(false);
                            valueField.setVisible(false);
                        }
                        this.render();
                    }
                }}); 
            }
        };

        // ADD REG, REG Block
        Blockly.Blocks['add_reg'] = {
            init: function() {
                this.appendDummyInput()
                    .appendField("ADD")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"]]), "DEST")
                    .appendField(",")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"]]), "SRC");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(150);
                this.setTooltip("Add contents of source register to destination register.");
            }
        }

        // BLOCK GENERATORS //
        javascriptGenerator.forBlock['mov_reg'] = function(block) {
            const dest = block.getFieldValue('DEST').toLowerCase();
            const srcType = block.getFieldValue('SRC_DROP');
            
            // get hex or register value
            let src = "";
            if (srcType === "CUSTOM") {
                src = "0x" + block.getFieldValue("HEX_VALUE");
            } else {
                src = srcType.toLowerCase();
            }
            return `    mov ${dest}, ${src}\n`;
        };

        javascriptGenerator.forBlock['section'] = function(block) {
            const section = block.getFieldValue('SECTION').toLowerCase();
            const nestedBlocks = javascriptGenerator.statementToCode(block, 'CODE');
            return `section ${section}\n${nestedBlocks}`
        };

        javascriptGenerator.forBlock['ret'] = function(block) {
            return `    ret`;
        };

        javascriptGenerator.forBlock['add_reg'] = function(block) {
            const dest = block.getFieldValue('DEST').toLowerCase();
            const src = block.getFieldValue('SRC').toLowerCase();
            return `    add ${dest}, ${src}\n`;
        };

        // COMBINING OF CODE BLOCKS IN THE WORKSPACE //
        javascriptGenerator.scrub_ = function(block, code, thisBlockOnly) {
            // gets next block
            const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
            if (nextBlock && !thisBlockOnly) {
                return code + javascriptGenerator.blockToCode(nextBlock); // concatenate code together
            }
            return code;
        }

        // TOOLBOX DEFINITION //
        const toolBox = {
            // toolbox with no categories for now
            kind: 'flyoutToolbox',

            // the blocks that we have for now
            contents: [
                { kind: 'block', type: 'mov_reg', },
                { kind: 'block', type: 'section', },
                { kind: 'block', type: 'ret', },
                { kind: 'block', type: 'add_reg' }
            ]
        };

        // WORKSPACE SETUP //
        const workspace = Blockly.inject(blocklyDiv.current, {
            toolbox: toolBox,
            trashcan: true,
        });

        // HANDLE CHANGES //
        const updateCode = () => {
            const code = javascriptGenerator.workspaceToCode(workspace);
            const output = `${code}`;
            setNasmCode(output);
        };
        workspace.addChangeListener(updateCode);

        return () => {
            workspace.dispose();
        };
    }, []);

    // MAIN SIMULATION //
    const runSimulation = () => {
        
        const regs = { ...registers }; //copy of registers
        const lines = nasmCode.split("\n").map(line => line.trim()).filter(line => line.length > 0); //split lines into instructions
        console.log(lines);

        // checks for sections and if program has returned
        let isInTextSection = false;
        let hasReturned = false;

        // hi ethan, changed lines.forEach to for loop so ret can work properly
        for (let i = 0; i < lines.length; i++) {
            if (hasReturned) break; // stops code

            const line = lines[i];
            const parts = line.split(/[ ,]+/);
            const opcode = parts[0].toLowerCase(); 

            // SEGMENT CHECKING //
            if (opcode === "section") {
                const sectionName = parts[1]?.toLowerCase();
                if (sectionName === ".text" || sectionName === "text") {
                    isInTextSection = true;
                } else {
                    isInTextSection = false; // false if .data or .bss
                }
                continue;
            }

            // RETURN STATEMENT CHECKING //
            if (opcode === "ret") {
                if (isInTextSection) {
                    hasReturned = true; // break code
                }
                continue;
            }

            // MNEMONICS INSIDE .text
            if (isInTextSection) {
                // MOV LOGIC
                if (parts[0] === "mov") {
                    const dest = parts[1];
                    const src = parts[2];
                    //check if valid register
                    if (regs[dest] !== undefined) {
                        if (regs[src] !== undefined) {
                            regs[dest] = regs[src];
                        } else {
                            const numValue = src.startsWith("0x") ? parseInt(src, 16) : parseInt(src, 10); // convert hex to real num
                            if (!isNaN(numValue)) {
                                regs[dest] = numValue;
                            }
                        }
                    }
                }

                // ADD LOGIC
                if (parts[0] === "add") {
                    const dest = parts[1];
                    const src = parts[2];
                    if (regs[src] !== undefined) {
                        regs[dest] = regs[dest] + regs[src];
                    } else {
                        const numericValue = src.startsWith("0x") ? parseInt(src, 16) : parseInt(src, 10);
                        if (!isNaN(numericValue)) {
                            regs[dest] = regs[dest] + numericValue;
                        }
                    }
                }
            }
        }

        // error check
        if (!isInTextSection && !hasReturned && lines.length > 0) {
            alert("Missing .text segment or 'ret' command.");
        } else {
            setRegisters(regs);
        }
    };

    const resetRegisters = () => {
        setRegisters({ rax: 0, rbx: 0, rcx: 0, rdx: 0 });
    }

    // Helper to format numValues to hex
    const formatHex = (value) => {
        return "0x" + value.toString(16).toUpperCase();
    };

    // MAIN // 
    return (
        //Hi gabe, just added the back button here
    <div className="flex flex-col items-left justify-center min-h-screen bg-stone-200 p-4 ">
        <div className="flex h-[600px] w-full gap-4 bg-stone-100 p-4 rounded-xl border border-stone-200">
            {/* workspace! */}
            <div ref={blocklyDiv} className="w-2/3 h-full rounded border bg-white shadow-inner" />
            
            {/* output display */}
                <div className="w-1/3 h-full flex flex-col">
                    <pre className="flex-grow bg-stone-950 text-emerald-400 p-4 font-mono text-xs rounded shadow overflow-auto whitespace-pre">
                <h2 className="font-bold mb-2">Output Display</h2>
                    </pre>

                {/* output display: registers */}
            <div className="flex-grow bg-stone-950 text-emerald-400 p-4 font-mono text-xs rounded shadow overflow-auto whitespace-pre">
                <h2 className="font-bold mb-2">Registers</h2>

                    <p>RAX: {formatHex(registers.rax)}</p>
                    <p>RBX: {formatHex(registers.rbx)}</p>
                    <p>RCX: {formatHex(registers.rcx)}</p>
                    <p>RDX: {formatHex(registers.rdx)}</p>
                </div>

                {/* output display: memory */}
            <div className="flex-grow bg-stone-950 text-emerald-400 p-4 font-mono text-xs rounded shadow overflow-auto whitespace-pre">
                <h2 className="font-bold mb-2">Memory</h2>

                {memory.map((value, index) => (
                <div key={index} className="flex justify-between text-sm font-mono">
                    <span>[{index}]</span>
                    <span>{value}</span>
                </div>))}
            </div>

            </div>
        </div>

        {/* run simulation button */}
        <div className="flex gap-4 mt-4">
            <button onClick={runSimulation}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Run
            </button>
        </div>

        {/* reset button */}
        <div>
            <button onClick={resetRegisters} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded gap-2 mt-4">
                Reset
            </button>
        </div>
        
        {/* back button */}
        <div>
            <Link href="/">
                <button className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded gap-2 mt-4">
                    Back
                </button>
            </Link>
        </div>
    </div>
    
  );
}
