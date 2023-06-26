import { useEffect, useState } from "react";

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${
    import.meta.env.VITE_API_KEY
  }&number=5`;

  const fetchPopularRecipes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setPopularRecipes(data.recipes);
  };

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  return (
    <div>
      <h1>Popular recipies</h1>
      <p>Popular</p>
      {popularRecipes.map((recipie)=>{
        return(
          <div key={recipie.id}>
            {recipie.title}
          </div>
        )
      })}
    </div>
  );
};

export default Popular;
