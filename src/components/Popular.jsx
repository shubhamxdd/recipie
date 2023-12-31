import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Wrapper, Card, Gradient } from "../styles/myStyles";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${
    import.meta.env.VITE_API_KEY
  }&number=10`;

  const fetchPopularRecipes = async () => {
    const checkLocalStorage = localStorage.getItem("popular");

    if (checkLocalStorage) {
      setPopularRecipes(JSON.parse(checkLocalStorage));
    } else {
      const response = await fetch(API_URL);
      const data = await response.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopularRecipes(data.recipes);
    }
  };

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  const options = {
    perPage: 4,
    breakpoints: {
      350: {
        perPage: 1,
      },
      600: {
        perPage: 2,
      },
      900: {
        perPage: 3,
      }
    },
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipies</h3>
        <Splide options={options}>
          {popularRecipes.map((recipie) => {
            return (
              <SplideSlide key={recipie.id}>
                <Card>
                  <Link to={`/recipie/${recipie.id}`}>
                    <p>{recipie.title}</p>
                    <img src={recipie.image} alt={recipie.title} />
                    <Gradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Popular;
