import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // 引入預設的樣式
import { modules, formats } from "./helper";

const TextEditorComponent = () => {
  //TODO: 這邊文字編輯器之後再做封裝
  const [editorValue, setEditorValue] = useState(
    '<p>okok 這樣可以欸，然後後端收<span style="color: rgb(230, 0, 0);">到的會</span>是一個html字串！</p><p><span style="background-color: rgb(230, 0, 0);">文字顏色</span></p>'
  );

  const handleChange = (value: any) => {
    setEditorValue(value);
  };

  return (
    <>
      <div className="rounded-xl border p-4 shadow-sm mb-4">
        <ReactQuill
          value={editorValue}
          onChange={handleChange}
          theme="snow" // 可以選擇不同的主題
          modules={modules}
          formats={formats}
          className="h-[300px] flex flex-col"
        />
      </div>

      <div>
        <h3>編輯器內容（後端）：</h3>
        <div>{editorValue}</div>
      </div>
    </>
  );
};

export default TextEditorComponent;
