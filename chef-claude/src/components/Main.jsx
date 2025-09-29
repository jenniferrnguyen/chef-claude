import React from "react";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(
        (ingredient) => <li key={ingredient}>{ingredient}</li>
    )

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients(prev => [...prev, newIngredient])
        }
    }

    const ingredientsAndGetRecipe = () => {
        return (
            <section className="ingredients-and-get-recipe-section">
                <h2 className="ingredients-header">Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
                <div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                         <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a recipe</button>
                </div>
            </section>
        )
    }

    return (
        <main>
            <form 
                action={addIngredient}
                className="add-ingredient-form"
            >
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            {ingredients.length > 0 && ingredientsAndGetRecipe()}
        </main> 
    );
}
