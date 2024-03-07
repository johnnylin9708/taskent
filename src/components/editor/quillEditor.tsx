import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Label } from "../ui/label";

interface QuillEditorProps {
  label?: string;
}

export const QuillEditor = ({ label }: QuillEditorProps) => {
  const myColors = [
    "purple",
    "#785412",
    "#452632",
    "#856325",
    "#963254",
    "#254563",
    "white",
  ];
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: myColors }],
      [{ background: myColors }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content: any) => {
    setCode(content);
    console.log(content);
  };
  return (
    <>
      {label && (
        <Label
          className="text-xs font-semibold text-neutral-700"
          htmlFor="editor"
        >
          {label}
        </Label>
      )}
      <ReactQuill
        theme="snow"
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
      <input hidden id="editor" name="editor" value={code} />
    </>
  );
};
