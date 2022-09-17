import React,{useEffect, useState} from 'react';
import style from './searchform.module.css';
import RecipeCard from './Recipe';



const SearchForm = (props) => {
    const ID = process.env.REACT_APP_ID;
    const KEY = process.env.REACT_APP_KEY;


    const [recipes, setRecipes ] = useState([]); //update recipes variable w/API response
    const [search, setSearch] = useState(''); //update search variable w/search keyword
    const [query, setQuery] = useState('');

    useEffect(() => {
    getRecipes();
    }, [query]); //only runs when 'query' updates


    const getRecipes = async () => { //GET call to Edamam API 
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${ID}&app_key=${KEY}`);    
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }


    return (
        <div>
            <div className={style.searchContainer}>
                <h1>Recipe App</h1>
                <h2 className='subtitle'>Description text</h2>
                <form className='search-form' onSubmit={getSearch}>
                    <input className='search-bar' type='text' value={search} onChange={updateSearch} />
                    <button className='search-button' type='submit'>Search</button>
                </form>
            </div>

            <div className='recipe-gallery'>
            {recipes.map(recipe => (
              <RecipeCard
                key={recipe.recipe.id}
                title={recipe.recipe.label} 
                type={recipe.recipe.dishType}
                image={recipe.recipe.images.REGULAR.url}
                calories={recipe.recipe.calories}
                macros={recipe.recipe.digest}
                ingredients={recipe.recipe.ingredients}
                servings={recipe.recipe.yield}
              />
            ))}
          </div>
        </div>
    );
}



export default SearchForm;