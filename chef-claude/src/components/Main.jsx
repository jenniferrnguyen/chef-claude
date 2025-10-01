import React from "react";
import AiRecipe from "./AiRecipe";
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [aiRecipe, setAiRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  async function getRecipe() {
    if (aiRecipe === "") {
      try {
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setAiRecipe(recipeMarkdown);
      } catch (err) {
        console.error("Error fetching recipe:", err);
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

      {aiRecipe != "" && <AiRecipe recipe={aiRecipe} />}
    </main>
  );
}
