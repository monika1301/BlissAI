import React, { useEffect, useRef } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import { Button } from "@/components/ui/button";
import { Clipboard, MoveLeft } from "lucide-react";

interface props {
  aiOutput: string;
}

function OutputSection({ aiOutput }: props) {
  const editorRef: any = useRef();

  useEffect(() => {
    const editorInstance = editorRef.current.getInstance();
    editorInstance.setMarkdown(aiOutput);
  }, [aiOutput]);

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between text-lg items-center p-1">
        <h2 className="text-purple-500 font-bold text-lg">Your Result</h2>
        <Button className="flex gap-1 font-md"
        onClick={()=>navigator.clipboard.writeText(aiOutput)}
        ><Clipboard className=" w-5 h-7" />
          Copy
        </Button>
      </div>
      <div className="font-grey">
        <Editor
          ref={editorRef}
          initialValue="Your result will appear here!"
          height="500px"
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          onChange={() =>
            console.log(editorRef.current.getInstance().getMarkdown())
          }
        />
      </div>
    </div>
  );
}

export default OutputSection;
