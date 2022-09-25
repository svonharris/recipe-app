import React,{useEffect, useState} from 'react';
import style from './styles/searchform.module.scss';
import RecipeCard from './Recipe';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




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
                <h2 className={style.title}>Find a recipe. Prepare a meal.</h2>
                <p className={style.subtitle}>Enter a food keyword into the search field and hit "SEARCH".</p>
                <form className={style.searchForm} onSubmit={getSearch}>
                    <TextField className={style.searchField}  id="outlined-basic" placeholder="ie. pumpkin" variant="outlined" value={search} onChange={updateSearch} />
                    <Button variant="outlined" className={style.searchButton} onClick={getSearch} size="large">Search</Button>
                </form>
            </div>
            
            {/* <div className='recipe-container'> */}
                <div className='recipe-gallery'>
                    {recipes.map((recipe, index) => 
                        <RecipeCard
                            key={index}
                            title={recipe.recipe.label} 
                            type={recipe.recipe.dishType}
                            image={recipe.recipe.images.REGULAR.url}
                            calories={recipe.recipe.calories}
                            macros={recipe.recipe.digest}
                            ingredients={recipe.recipe.ingredients}
                            servings={recipe.recipe.yield}
                        />
                    )}
                </div>
            {/* </div> */}
        </div>
    );
}



export default SearchForm;