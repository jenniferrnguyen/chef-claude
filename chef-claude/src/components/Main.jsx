import React from "react";

export default function Main() {
    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(
        (ingredient) => <li key={ingredient}>{ingredient}</li>
    )

    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if (newIngredient && !ingredients.includes(newIngredient)) {
            setIngredients(prev => [...prev, newIngredient])
        }
        event.currentTarget.reset()

    }
    return (
        <main>
            <form 
                className="add-ingredient-form"
                onSubmit={handleSubmit}
            >
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
