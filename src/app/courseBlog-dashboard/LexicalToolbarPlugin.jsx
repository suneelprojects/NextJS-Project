import React, { useCallback, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  SELECTION_CHANGE_COMMAND,
  $createParagraphNode,
  $setSelection,
} from "lexical";
import { INSERT_UNORDERED_LIST_COMMAND, INSERT_ORDERED_LIST_COMMAND, REMOVE_LIST_COMMAND } from "@lexical/list";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $createHeadingNode } from "@lexical/rich-text";

const FONT_SIZES = [12, 14, 15, 16, 18, 20, 24, 28, 32];
const FONT_FAMILIES = [
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: "'Times New Roman', Times, serif" },
  { label: "Courier New", value: "'Courier New', Courier, monospace" },
];

export function ToolbarPlugin() {
  const [editor] = useLexicalComposerContext();
  const [fontSize, setFontSize] = useState(15);
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");

  // Formatting handlers
  const format = (type) => editor.dispatchCommand(FORMAT_TEXT_COMMAND, type);
  const formatBlock = (type) => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, type);

  // Font size
  const handleFontSize = (e) => {
    setFontSize(Number(e.target.value));
    document.execCommand("fontSize", false, "7"); // Lexical doesn't support font size natively yet
  };

  // Font family
  const handleFontFamily = (e) => {
    setFontFamily(e.target.value);
    document.execCommand("fontName", false, e.target.value); // Lexical doesn't support font family natively yet
  };

  // Link
  const handleLink = () => {
    setShowLinkInput(true);
  };
  const applyLink = () => {
    editor.dispatchCommand(TOGGLE_LINK_COMMAND, linkUrl);
    setShowLinkInput(false);
    setLinkUrl("");
  };

  // Alignment
  const align = (type) => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, type);

  // Headings
  const setHeading = (level) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const heading = $createHeadingNode("h" + level);
        selection.insertNodes([heading]);
      }
    });
  };
  const setParagraph = () => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        const paragraph = $createParagraphNode();
        selection.insertNodes([paragraph]);
      }
    });
  };

  return (
    <div style={{ display: "flex", gap: 8, border: "1px solid #eee", borderRadius: 6, padding: 8, marginBottom: 12, alignItems: "center", flexWrap: "wrap" }}>
      {/* Heading/Paragraph */}
      <select onChange={e => e.target.value === "p" ? setParagraph() : setHeading(e.target.value)} defaultValue="p">
        <option value="p">Normal</option>
        <option value="1">H1</option>
        <option value="2">H2</option>
        <option value="3">H3</option>
        <option value="4">H4</option>
      </select>
      {/* Font Family */}
      <select value={fontFamily} onChange={handleFontFamily}>
        {FONT_FAMILIES.map(f => <option key={f.value} value={f.value}>{f.label}</option>)}
      </select>
      {/* Font Size */}
      <select value={fontSize} onChange={handleFontSize}>
        {FONT_SIZES.map(size => <option key={size} value={size}>{size}</option>)}
      </select>
      {/* Bold, Italic, Underline */}
      <button type="button" onClick={() => format("bold")}><b>B</b></button>
      <button type="button" onClick={() => format("italic")}><i>I</i></button>
      <button type="button" onClick={() => format("underline")}><u>U</u></button>
      {/* Code */}
      <button type="button" onClick={() => format("code")}>{"< >"}</button>
      {/* Link */}
      <button type="button" onClick={handleLink}>🔗</button>
      {showLinkInput && (
        <span>
          <input value={linkUrl} onChange={e => setLinkUrl(e.target.value)} placeholder="Paste link..." style={{ width: 120 }} />
          <button type="button" onClick={applyLink}>Apply</button>
        </span>
      )}
      {/* List */}
      <button type="button" onClick={() => editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND)}>• List</button>
      <button type="button" onClick={() => editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND)}>1. List</button>
      <button type="button" onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND)}>Remove List</button>
      {/* Alignment */}
      <button type="button" onClick={() => align("left")}>Left</button>
      <button type="button" onClick={() => align("center")}>Center</button>
      <button type="button" onClick={() => align("right")}>Right</button>
      {/* Highlight/Color (basic, using execCommand for now) */}
      <button type="button" onClick={() => document.execCommand("foreColor", false, "#e53e3e")}>A</button>
      <button type="button" onClick={() => document.execCommand("backColor", false, "#fef08a")}>🖍️</button>
      {/* Insert (basic, no image/table yet) */}
      {/* Add more insert options as needed */}
    </div>
  );
}

export default ToolbarPlugin; 