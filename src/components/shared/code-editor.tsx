import { useTheme } from "@/hooks/useTheme";
import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDark as styleDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { anOldHope as styleDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { atelierLakesideDark as styleDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
// import { atomOneDarkReasonable as styleDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dracula as styleDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { a11yLight as styleLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
  language: string;
  content: string;
}
const CodeEditor = ({ language, content }: Props) => {
  const { theme } = useTheme();

  const style = theme === "dark" ? styleDark : styleLight;

  return (
    <SyntaxHighlighter language={language} style={style}>
      {content}
    </SyntaxHighlighter>
  );
};

export default CodeEditor;
