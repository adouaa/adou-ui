import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/css/css";
import "codemirror/mode/javascript/javascript";
const CodeEditor = () => {
  const [code, setCode] = useState(``);

  return (
    
    <div>
      <CodeMirror
        value={code}
        onBeforeChange={(editor, data, value) => {
            console.log(value);
          setCode(value);
        }}
        options={{
          mode: "css",
          theme: "material", // 设置主题为默认，背景色为白色
          lineNumbers: false, // 不显示行号
          lineWrapping: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
