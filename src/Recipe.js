import React from 'react';
import style from './recipe.module.css';
import Main from './Main';
import { Link } from "react-router-dom";


const RecipeCard = (props) => {
    return (
        <div className={style.recipeCard}>
            <a href={props.link} className={style.link}>
                <img className={style.img} src={props.image} />
            </a>
            <h3 className={style.title}>{props.title}</h3>
            <p className={style.type}>{props.type}</p>
            <Link to="/signup" className={style.readMore}>Read more</Link>
        </div>
    );
}



export default RecipeCard;