import React,{useEffect, useState} from 'react';
// import logo from './logo.svg';
import RecipeCard from './Recipe';
import './App.css';

function App() {

  
  
  const [recipes, setRecipes ] = useState([]); //update recipes variable w/API response
  const [search, setSearch] = useState(''); //update search variable w/search keyword
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]); //only runs when 'query' updates
 

  const getRecipes = async () => { //GET call to Edamam API 
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    // console.log(data.hits);
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
    <div className='App'>
      <h1>Recipe App</h1>

      <main>
        <form className='search-form' onSubmit={getSearch}>
          <input className='search-bar' type='text' value={search} onChange={updateSearch} />
          <button className='search-button' type='submit'>Search</button>
        </form>

        <div className='recipe-gallery'>
          {recipes.map(recipe => (
            <RecipeCard 
              key={recipe.recipe.label}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.images.THUMBNAIL.url}
            />
          ))}
        </div>
      </main>
    </div>
  );
}



export default App;
