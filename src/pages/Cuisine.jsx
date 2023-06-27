import { useState, useEffect } from "react";
import { Grid, Card } from "../styles/cuisineStyles";
import { motion } from "framer-motion";
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
    console.log(data);
    setCuisine(data.results);
  };
  useEffect(() => {
    fetchCuisine(params.type);
  }, [params.type]);

  return (
    <Grid>
      {cuisine.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
          </Card>
        );
      })}
    </Grid>
  );
};

export default Cuisine;
