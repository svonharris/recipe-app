import React from 'react';
import style from './styles/recipe.module.scss';
import MacroFacts from './MacroFacts';


const RecipeCard = (props) => {


    return (
        <div className={style.recipeCard}>
            <div className={style.recipeContainer}>
                <h3 className={style.title}>{props.title}</h3>
                <div className={style.recipeMedia}>
                    <img className={style.img} src={props.image} alt={'Image of ' + props.title} />
                    <p className={style.serving}><b>Serving size: </b>{props.servings}</p>
                    <p><b>Calories: </b>{Math.round(props.calories)}</p>
                    <ul className={style.macroList}>
                        {props.macros.map((macro) => (
                            macro.label === 'Fat' || macro.label === 'Carbs' || macro.label === 'Protein'
                            ? ( <li><MacroFacts calories={props.calories} macro={macro.label} total={macro.total} key={macro.id} /> </li>)
                            : null
                        ))}
                    </ul>
                </div>
                <div className={style.recipeContent}>
                    <p className={style.subheading}>Ingredients:</p>
                    <ul className={style.ingredientList}>
                        {props.ingredients.map(ingredient => 
                            <li className={style.ingredientItem}>{ingredient.text}</li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}



export default RecipeCard;