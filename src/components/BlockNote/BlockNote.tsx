"use client";

import "@blocknote/core/style.css";

import { type Block, BlockNoteEditor } from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  onEdit?: (blocks: Block[]) => void;
}

export function BlockNote(props: Props) {
  const { onEdit } = props;

  const onEditorContentChange = (editor: BlockNoteEditor) => {
    if (!onEdit) return;
    onEdit(editor.topLevelBlocks);
  };

  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange,
  });

  const handleCick = () => {
    console.log(editor?.blockCache);
    alert("blocknote cache printed in console");
  };

  return (
    <>
      <button onClick={handleCick} type='button'>
        click
      </button>
      <BlockNoteView editor={editor} />
    </>
  );
}
