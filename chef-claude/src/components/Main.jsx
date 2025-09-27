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
    return (
        <main>
            <form 
                action={addIngredient}
                className="add-ingredient-form"            >
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>+ Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main> 
    );
}
