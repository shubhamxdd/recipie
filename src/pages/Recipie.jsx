import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DetailWrapper, Button, Info } from "../styles/recipieStyles";

const Recipie = () => {
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("instructions");
  const params = useParams();

  const fetchRecipie = async () => {
    const API_URL = `https://api.spoonacular.com/recipes/${
      params.name
    }/information?apiKey=${import.meta.env.VITE_API_KEY}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    setDetails(data);
  };

  useEffect(() => {
    fetchRecipie();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          onClick={() => {
            setActive("instructions");
          }}
          className={active === "instructions" ? "active" : null}
        >
          Instructions
        </Button>
        <Button
          onClick={() => {
            setActive("ingredients");
          }}
          className={active === "ingredients" ? "active" : null}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

export default Recipie;
