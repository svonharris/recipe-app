// import logo from './logo.svg';
import RecipeCard from './Recipe';
import Header from './Header';
import Footer from './Footer';
import './App.css';






function App() {
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
    <div className='App'>
      <header>
        <Header />
      </header>


      <main className='main'>
        <div className='search-container'>
          <h1>Recipe App</h1>
          <h2 className='subtitle'>Description text</h2>
          <form className='search-form' onSubmit={getSearch}>
            <input className='search-bar' type='text' value={search} onChange={updateSearch} />
            <button className='search-button' type='submit'>Search</button>
          </form>
        </div>

        <div className='reloadDiv'>  {/*I want to realod this div w/new content*/}
        
          <div className='recipe-gallery'>
            {recipes.map(recipe => (
              <RecipeCard 
                key={recipe.recipe.label}
                title={recipe.recipe.label} 
                type={recipe.recipe.dishType}
                image={recipe.recipe.images.REGULAR.url}
              />
            ))}
          </div>

        </div>

      </main>


      <Footer />
    </div>
  );
}



export default App;
