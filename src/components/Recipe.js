import React from 'react';
import style from './styles/recipe.module.css';
import MacroFacts from './MacroFacts';


const RecipeCard = (props) => {


    return (
        <div className={style.recipeCard}>
            <div className={style.recipeContainer}>
                <div className={style.recipeMedia}>
                    <img className={style.img} src={props.image} alt={'Image of ' + props.title} />
                </div>
                <div className={style.recipeContent}>
                    <h3 className={style.title}>{props.title}</h3>
                    <p className={style.serving}>Serving size: {props.servings}</p>
                    <p>Calories: {Math.round(props.calories)}</p>
                    <ul className={style.macroList}>
                        {props.macros.map((macro) => (
                            macro.label === 'Fat' || macro.label === 'Carbs' || macro.label === 'Protein'
                            ? ( <li><MacroFacts calories={props.calories} macro={macro.label} total={macro.total} key={macro.id} /> </li>)
                            : null
                        ))}
                    </ul>
                    <h3 className={style.subheading}>Ingredients:</h3>
                    <ul className={style.ingredientList}>
                        {props.ingredients.map(ingredient => (
                            <li className={style.ingredientItem}>{ingredient.text}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default RecipeCard;