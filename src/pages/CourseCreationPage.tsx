import React from "react";
import TextEditorComponent from "@/components/TextEditor/TextEditorComponent";

const CourseCreationPage: React.FC = () => {
  return (
    <>
      <h1>課程建立頁面(範例)</h1>
      <div className="container px-4 pt-4">
      <TextEditorComponent />
      </div>

    </>
  );
};

export default CourseCreationPage;
