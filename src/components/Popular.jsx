import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Popular = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  const API_URL = `https://api.spoonacular.com/recipes/random?apiKey=${
    import.meta.env.VITE_API_KEY
  }&number=5`;

  const fetchPopularRecipes = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data.recipes);
    setPopularRecipes(data.recipes);
  };

  useEffect(() => {
    fetchPopularRecipes();
  }, []);

  const options = {
    perPage: 4,
    arrows: false,
    pagination: false,
    drag: "free",
    gap: "2rem",
  };
  const Wrapper = styled.div`
    margin: 4rem 0;
  `;
  const Card = styled.div`
    min-height: 15rem;
    border-radius: 2rem;
    overflow: hidden;
    position: relative;

    img {
      border-radius: 1rem;
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      object-fit: cover;
    }

    p {
      position: absolute;
      z-index: 999;
      left: 50%;
      bottom: 0;
      transform: translate(-50% ,0%);
      color: white;
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40%;
      // font-size: 1.5rem;
      // font-weight: 700;
    }
  `;

  const Gradient = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6));
  `

  return (
    <div>
      <Wrapper>
        <h3>Popular Recipies</h3>
        <Splide options={options}>
          {popularRecipes.map((recipie) => {
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

export default Popular;
