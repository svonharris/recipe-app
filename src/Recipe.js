import React from "react";


// const RecipeCard = ({title, calories, image}) => {
//     return (
//         <div className="recipe-card">
//             <div className="recipe-card-title">{title}</div>
//             <p className="recipe-card-calories">{calories}</p>
//             <img className="recipe-card-img" src={image} />
//         </div>
//     );
// }


const RecipeCard = (props) => {
    return (
        <div className="recipe-card">
            <div className="recipe-card-title">{props.title}</div>
            <p className="recipe-card-calories">{props.calories}</p>
            <img className="recipe-card-img" src={props.image} />
        </div>
    );
}



export default RecipeCard;