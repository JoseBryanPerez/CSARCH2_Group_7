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
    const [nasmCode, setNasmCode] = useState('');

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

    // MAIN // 
    return (
        //Hi gabe, just added the back button here
    <div className="flex flex-col items-left justify-center min-h-screen bg-stone-200 p-4 ">
        <div className="flex h-[500px] w-full gap-4 bg-stone-100 p-4 rounded-xl border border-stone-200">
            {/* workspace! */}
            <div ref={blocklyDiv} className="w-2/3 h-full rounded border bg-white shadow-inner" />
            
            {/* output display */}
                <div className="w-1/3 h-full flex flex-col">
                    <pre className="flex-grow bg-stone-950 text-emerald-400 p-4 font-mono text-xs rounded shadow overflow-auto whitespace-pre">
                    {nasmCode || "; block will show here temporarily (while i havent coded output yet)"}
                    </pre>
                </div>
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
