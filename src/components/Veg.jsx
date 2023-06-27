import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "../styles/myStyles";
import "@splidejs/react-splide/css";

const Veg = () => {
  const [vegRecipes, setVegRecipes] = useState([]);

  const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${
    import.meta.env.VITE_API_KEY
  }&number=8&tags=vegetarian`;

  const fetchVegRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("veg");

    if (checkLocalStorage) {
      setVegRecipes(JSON.parse(checkLocalStorage));
    } else {
      const response = await fetch(API_URL);
      const data = await response.json();
      localStorage.setItem("veg", JSON.stringify(data.recipes));
      setVegRecipes(data.recipes);
    }
  };

  useEffect(() => {
    fetchVegRecipes();
  }, []);

  const options = {
    perPage: 3,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
  };

  return (
    <div>
      <Wrapper>
        <h3>Veg Recipies</h3>
        <Splide options={options}>
          {vegRecipes.map((recipie) => {
            return (
              <SplideSlide key={recipie.id}>
                <Card>
                  <p>{recipie.title}</p>
                  <img src={recipie.image} alt={recipie.title} />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Veg;
