import SyntaxHighlighter from "react-syntax-highlighter";
// import { atomOneDark as style } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { anOldHope as style } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface Props {
	language: string;
	content: string;
}
const CodeEditor = ({ language, content }: Props) => {
	return (
		<SyntaxHighlighter language={language} style={style}>
			{content}
		</SyntaxHighlighter>
	);
};

export default CodeEditor;
