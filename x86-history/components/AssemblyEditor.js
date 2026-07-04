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
                this.appendStatementInput("CODE")
                    .appendField();
                this.appendDummyInput();
                this.setColour(300);
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setTooltip("Define the basic structure of your SASM assembler program.");
            }
        }

        // MOV REG, REG block
        Blockly.Blocks['mov_reg'] = {
            init: function() {
                this.appendDummyInput()
                    .appendField("MOV")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"]]), "DEST")
                    .appendField(",")
                    .appendField(new Blockly.FieldDropdown([["rax","RAX"], ["rbx","RBX"], ["rcx","RCX"], ["rdx","RDX"]]), "SRC");
                this.setPreviousStatement(true, null);
                this.setNextStatement(true, null);
                this.setColour(210);
                this.setTooltip("Move contents of source register into destination register.");
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
            const src = block.getFieldValue('SRC').toLowerCase();
            return `    mov ${dest}, ${src}\n`;
        };

        javascriptGenerator.forBlock['section'] = function(block) {
            const section = block.getFieldValue('SECTION').toLowerCase();
            return `    section ${section}`;
        };

        javascriptGenerator.forBlock['ret'] = function(block) {
            return `    ret`;
        };

        javascriptGenerator.forBlock['add_reg'] = function(block) {
            const dest = block.getFieldValue('DEST').toLowerCase();
            const src = block.getFieldValue('SRC').toLowerCase();
            return `    add ${dest}, ${src}\n`;
        };

        // TOOLBOX DEFINITION //
        const toolBox = {
            // toolbox with no categories for now
            kind: 'flyoutToolbox',

            // the blocks that we have for now
            contents: [
                {
                    kind: 'block',
                    type: 'mov_reg',
                },
                {
                    kind: 'block',
                    type: 'section',
                },
                {
                    kind: 'block',
                    type: 'ret',
                },
                {
                    kind: 'block',
                    type: 'add_reg'
                }
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

        //execute line by line
        lines.forEach(line => {
            const parts = line.split(/[ ,]+/);

        // MOV
        // ===it works but nothing actually happens (moves 0 to 0), need to implement immediate value block===
        if (parts[0] === "mov") {

            const dest = parts[1];
            const src = parts[2];

            //check if valid register
            if (regs[src] !== undefined) {
                regs[dest] = regs[src];
            }
        }
    });
        setRegisters(regs);
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

                    <p>RAX: {registers.rax}</p>
                    <p>RBX: {registers.rbx}</p>
                    <p>RCX: {registers.rcx}</p>
                    <p>RDX: {registers.rdx}</p>
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
