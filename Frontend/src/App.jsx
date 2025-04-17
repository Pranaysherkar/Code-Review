import React, { useState } from "react";
import axios from "axios";
import Editor from "react-simple-code-editor";
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const App = () => {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleReview = async () => {
    if (!code.trim()) return; // prevent empty request

    setIsLoading(true); // disable button
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_URL}ai/get-review`,
        { code }
      );
      // console.log(response.data.response);
      setReview(response.data.response);
    } catch (error) {
      console.error("Error:", error);
      setReview("// Failed to fetch review.");
    } finally {
      setIsLoading(false); // enable button only if editor still has code
    }
  };

  //function for ReactMarkdown
  const CodeBlock = ({ children }) => {
    const codeString = String(children).replace(/\n$/, "");
    const highlightedCode = Prism.highlight(
      codeString,
      Prism.languages.javascript,
      "javascript"
    );
    return (
      <pre className="language-js text-sm rounded p-2 bg-black text-white">
        <code
          className="programming-language"
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
        />
      </pre>
    );
  };

  return (
    <div className="main h-screen md:h-screen w-full bg-[#030712] text-white flex flex-col md:flex-row p-5 gap-4 md:overflow-auto ">
      {/* Left Side - Code Input */}
      <div className="w-full h-1/2 md:w-1/2 md:h-full p-4 bg-[#10141E] flex flex-col gap-4 rounded-lg">
        <h2 className="text-xl font-semibold">Enter Code✨.</h2>
        <div className="flex-1 overflow-auto bg-black rounded-lg border border-gray-700 text-sm custom-scrollbar">
          <Editor
            value={code}
            onValueChange={(code) => setCode(code)}
            highlight={(code) =>
              Prism.highlight(code, Prism.languages.javascript, "javascript")
            }
            padding={10}
            className="outline-none font-mono"
            style={{
              minHeight: "100%",
              backgroundColor: "#1C2029",
              color: "#fff",
            }}
          />
        </div>
        <button
          className={`bg-blue-600 ${
            isLoading || !code.trim()
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-700"
          } text-white py-2 rounded`}
          onClick={handleReview}
          disabled={isLoading || !code.trim()}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>

      {/* Right Side - Review Output */}
      <div className="custom-scrollbar w-full md:w-1/2 md:h-full h-1/2 p-4 bg-[#10141E] overflow-auto rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Code Review🧐.</h2>
        <div className="markdown-output">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code: ({ node, inline, className, children, ...props }) => {
                return inline ? (
                  <code
                    {...props}
                  >
                    {children}
                  </code>
                ) : (
                  <div className="code-block-wrapper">
                    <CodeBlock>{children}</CodeBlock>
                  </div>
                );
              },
              p: ({ children }) => (
                <p className="text-white text-sm mb-2">{children}</p>
              ),
            }}
          >
            {review || "Your review will appear here..."}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default App;
