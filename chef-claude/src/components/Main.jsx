import React from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const [recipeShown, setRecipeShown] = React.useState(false);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setIngredients((prev) => [...prev, newIngredient]);
    }
  }

  function toggleRecipeShown() {
    setRecipeShown((prev) => !prev);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>+ Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ingredients={ingredients}
          toggleRecipeShown={toggleRecipeShown}
        />
      )}

      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
