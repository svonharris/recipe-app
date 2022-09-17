import React from 'react';
import style from './recipe.module.css';
import MacroFacts from './MacroFacts';


const RecipeCard = (props) => {


    return (
        <div className={style.recipeCard}>
            <a href={props.link} className={style.link}>
                <img className={style.img} src={props.image} />
            </a>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.type}>{props.type}</p>
            <p>Serving Size: {props.servings}</p>
            {props.ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
            ))}
            {props.macros.map((macro) => (
                macro.label === 'Fat' || macro.label === 'Carbs' || macro.label === 'Protein'
                ? (<MacroFacts macro={macro.label} total={macro.total} key={macro.id} />)
                : null
            ))}
            <div className={style.readMore}>Read more</div>
        </div>
    );
}



export default RecipeCard;