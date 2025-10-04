import ReactMarkdown from "react-markdown";

export default function AiRecipe(props) {
  return (
    <section ref={props.ref} className="ai-recipe-section" aria-live="polite">
      <h2>Chef Clyde Recommends:</h2>
      <ReactMarkdown>{props.recipe}</ReactMarkdown>
    </section>
  );
}
