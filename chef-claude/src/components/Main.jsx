import React from "react";
import AiRecipe from "./AiRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [aiRecipe, setAiRecipe] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const recipeSectionRef = React.useRef(null);

  React.useEffect(() => {
    if (aiRecipe !== "" && recipeSectionRef !== null) {
      recipeSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [aiRecipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  async function getRecipe() {
    if (aiRecipe === "") {
      try {
        setLoading(true);
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setAiRecipe(recipeMarkdown);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <main>
      {aiRecipe === "" && (
        <form action={addIngredient} className="add-ingredient-form">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g. oregano"
            name="ingredient"
          />
          <button>+ Add ingredient</button>
        </form>
      )}

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          getRecipe={getRecipe}
          aiRecipe={aiRecipe}
        />
      )}

      {loading && <div className="spinner"></div>}

      {aiRecipe != "" && <AiRecipe ref={recipeSectionRef} recipe={aiRecipe} />}
    </main>
  );
}
