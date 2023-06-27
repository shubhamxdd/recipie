import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Grid, Card } from "../styles/cuisineStyles";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const params = useParams();

  const fetchSearch = async (name) => {
    const API_URL = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
      import.meta.env.VITE_API_KEY
    }&query=${name}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    setSearched(data.results);
  };
    useEffect(() => {
      fetchSearch(params.search);
    }, [params.search]);

  return (
    <Grid>
      {searched.map((item) => {
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

export default Searched;
