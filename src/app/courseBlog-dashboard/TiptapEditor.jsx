'use client'

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import { createLowlight } from 'lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import python from 'highlight.js/lib/languages/python';
import Color from '@tiptap/extension-color';
import { TextStyle } from '@tiptap/extension-text-style';
import FontFamily from '@tiptap/extension-font-family';
import { Table } from '@tiptap/extension-table';
import { TableRow } from '@tiptap/extension-table-row';
import { TableCell } from '@tiptap/extension-table-cell';
import { TableHeader } from '@tiptap/extension-table-header';
import { Plugin } from 'prosemirror-state';
import React, { useRef } from 'react';

// Create lowlight instance and register languages
const lowlight = createLowlight();
lowlight.register('javascript', javascript);
lowlight.register('python', python);

const ToolbarButton = ({ onClick, active, children, title }) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      background: active ? '#ede9fe' : 'transparent',
      border: 'none',
      borderRadius: 4,
      padding: '4px 8px',
      margin: '0 2px',
      cursor: 'pointer',
      fontWeight: active ? 700 : 400,
      color: active ? '#6d28d9' : '#222',
    }}
    title={title}
  >
    {children}
  </button>
);

const COLORS = [
  '#000000', '#e60000', '#ff9900', '#ffff00', '#008a00', '#0066cc', '#9933ff',
  '#ffffff', '#facccc', '#ffebcc', '#ffffcc', '#cce8cc', '#cce0f5', '#ebd6ff',
  '#bbbbbb', '#f06666', '#ffc266', '#ffff66', '#66b966', '#66a3e0', '#c285ff',
  '#888888', '#a10000', '#b26b00', '#b2b200', '#006100', '#0047b2', '#6b24b2',
  '#444444', '#5c0000', '#663d00', '#666600', '#003700', '#002966', '#3d1466',
];

const FONT_FAMILIES = [
  'Arial, sans-serif',
  'Georgia, serif',
  'Times New Roman, Times, serif',
  'Courier New, Courier, monospace',
  'Verdana, Geneva, sans-serif',
  'Tahoma, Geneva, sans-serif',
  'Trebuchet MS, Helvetica, sans-serif',
  'Impact, Charcoal, sans-serif',
];

const FONT_SIZES = [
  '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px', '48px', '60px', '72px'
];

const Tiptap = ({ value, onChange }) => {
  const fileInputRef = useRef();
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Highlight,
      Link,
      Image.extend({
        addProseMirrorPlugins() {
          return [
            // Paste image from clipboard
            new Plugin({
              props: {
                handlePaste(view, event) {
                  const items = event.clipboardData?.items;
                  if (items) {
                    for (let i = 0; i < items.length; i++) {
                      const item = items[i];
                      if (item.type.indexOf('image') !== -1) {
                        const file = item.getAsFile();
                        const reader = new FileReader();
                        reader.onload = readerEvent => {
                          const node = editor.schema.nodes.image.create({ src: readerEvent.target.result });
                          const transaction = view.state.tr.replaceSelectionWith(node);
                          view.dispatch(transaction);
                        };
                        reader.readAsDataURL(file);
                        return true;
                      }
                    }
                  }
                  return false;
                },
              },
            }),
          ];
        },
      }),
      CodeBlockLowlight.configure({ lowlight }),
      TextStyle,
      Color,
      FontFamily,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
    ],
    content: value,
    onUpdate: ({ editor }) => {
      if (onChange) {
        onChange(editor.getHTML());
      }
    },
    editorProps: {
      attributes: {
        class: 'tiptap-editor-area',
      },
    },
    immediatelyRender: false,
  });

  if (!editor) return null;

  // Custom font size command using TextStyle
  const setFontSize = (size) => {
    editor.chain().focus().setMark('textStyle', { fontSize: size }).run();
  };

  return (
    <div>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 4,
        border: '1px solid #e5e7eb',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        background: '#f8fafc',
        alignItems: 'center',
      }}>
        {/* Heading Dropdown */}
        <select
          value={editor.getAttributes('heading').level || 'p'}
          onChange={e => {
            const level = e.target.value;
            if (level === 'p') editor.chain().focus().setParagraph().run();
            else editor.chain().focus().toggleHeading({ level: Number(level) }).run();
          }}
          style={{ marginRight: 8, borderRadius: 4, padding: '2px 6px' }}
        >
          <option value="p">Normal</option>
          <option value="1">H1</option>
          <option value="2">H2</option>
          <option value="3">H3</option>
          <option value="4">H4</option>
        </select>
        {/* Font Family */}
        <select
          value={editor.getAttributes('fontFamily') || ''}
          onChange={e => editor.chain().focus().setFontFamily(e.target.value).run()}
          style={{ marginRight: 8, borderRadius: 4, padding: '2px 6px' }}
        >
          <option value="">Font Family</option>
          {FONT_FAMILIES.map(f => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
        {/* Font Size (custom) */}
        <select
          value={editor.getAttributes('textStyle').fontSize || ''}
          onChange={e => setFontSize(e.target.value)}
          style={{ marginRight: 8, borderRadius: 4, padding: '2px 6px' }}
        >
          <option value="">Font Size</option>
          {FONT_SIZES.map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} active={editor.isActive('bold')} title="Bold"><b>B</b></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} active={editor.isActive('italic')} title="Italic"><i>I</i></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} active={editor.isActive('underline')} title="Underline"><u>U</u></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} active={editor.isActive('strike')} title="Strike"><s>S</s></ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} active={editor.isActive('code')} title="Inline Code">{'<>'}</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleHighlight().run()} active={editor.isActive('highlight')} title="Highlight">🖍️</ToolbarButton>
        {/* Text Color */}
        <input
          type="color"
          title="Text Color"
          onChange={e => editor.chain().focus().setColor(e.target.value).run()}
          style={{ margin: '0 4px', width: 28, height: 28, border: 'none', background: 'transparent', cursor: 'pointer' }}
        />
        {/* Color Palette */}
        <select
          title="Quick Color"
          onChange={e => editor.chain().focus().setColor(e.target.value).run()}
          style={{ margin: '0 4px', borderRadius: 4, padding: '2px 6px' }}
        >
          <option value="">Color</option>
          {COLORS.map(color => (
            <option key={color} value={color} style={{ background: color, color: '#fff' }}>{color}</option>
          ))}
        </select>
        {/* Link */}
        <ToolbarButton
          onClick={() => {
            const url = window.prompt('Enter URL');
            if (url) editor.chain().focus().setLink({ href: url }).run();
          }}
          active={editor.isActive('link')}
          title="Link"
        >
          🔗
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().unsetLink().run()} active={false} title="Remove Link">❌🔗</ToolbarButton>
        {/* Image */}
        <ToolbarButton
          onClick={() => fileInputRef.current && fileInputRef.current.click()}
          active={false}
          title="Insert Image"
        >
          🖼️
        </ToolbarButton>
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: 'none' }}
          onChange={e => {
            const file = e.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onload = readerEvent => {
                editor.chain().focus().setImage({ src: readerEvent.target.result }).run();
              };
              reader.readAsDataURL(file);
            }
          }}
        />
        {/* Lists */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} active={editor.isActive('bulletList')} title="Bullet List">• List</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} active={editor.isActive('orderedList')} title="Numbered List">1. List</ToolbarButton>
        {/* Blockquote */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} active={editor.isActive('blockquote')} title="Blockquote">❝</ToolbarButton>
        {/* Code Block */}
        <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} active={editor.isActive('codeBlock')} title="Code Block">[code]</ToolbarButton>
        {/* Alignment */}
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} active={editor.isActive({ textAlign: 'left' })} title="Align Left">⇤</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} active={editor.isActive({ textAlign: 'center' })} title="Align Center">↔</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} active={editor.isActive({ textAlign: 'right' })} title="Align Right">⇥</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} active={editor.isActive({ textAlign: 'justify' })} title="Justify">☰</ToolbarButton>
        {/* Table Controls */}
        <ToolbarButton onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} active={false} title="Insert Table">📋 Table</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().addColumnBefore().run()} active={false} title="Add Column Before">➕Col←</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().addColumnAfter().run()} active={false} title="Add Column After">➕Col→</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().addRowBefore().run()} active={false} title="Add Row Before">➕Row↑</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().addRowAfter().run()} active={false} title="Add Row After">➕Row↓</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().deleteColumn().run()} active={false} title="Delete Column">❌Col</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().deleteRow().run()} active={false} title="Delete Row">❌Row</ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().deleteTable().run()} active={false} title="Delete Table">❌Table</ToolbarButton>
        {/* Add Button (custom action placeholder) */}
        <ToolbarButton onClick={() => alert('Add button clicked!')} active={false} title="Add">Add</ToolbarButton>
      </div>
      {/* Editor Content */}
      <div style={{ border: '1px solid #e5e7eb', borderRadius: 8, background: 'white', minHeight: 600, minWidth: 0, width: '100%', maxWidth: '100%', padding: 32 }}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Tiptap;