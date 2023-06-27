import { useState, useEffect } from "react";
import { Grid, Card } from "../styles/cuisineStyles";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const fetchCuisine = async (name) => {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&cuisine=${name}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setCuisine(data.results);
  };
  useEffect(() => {
    fetchCuisine(params.type);
  }, [params.type]);

  return (
    <Grid
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/recipie/${item.id}`}>
              <img src={item.image} alt={item.title} />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
