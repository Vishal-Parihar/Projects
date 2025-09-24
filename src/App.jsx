import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const handleSearch = async () => {
    if (!query) return;
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${query}&number=6&apiKey=038766f476d648859e6540a49d511584`
      ).then((res) => res.json());
      setRecipes(data.results || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };
  return (
    <div className="app">
      <h1>🍳 Recipe Finder</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for recipes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="recipes">
        {recipes.map((recipe) => {
          const url =
            recipe.sourceUrl ||
            `https://spoonacular.com/recipes/${recipe.title.replace(/\s+/g, "-")}-${recipe.id}`;

          return (
            <a
              key={recipe.id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="recipe-card"
            >
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </a>
          );
        })}
      </div>
    </div>
  );
}
export default App;
