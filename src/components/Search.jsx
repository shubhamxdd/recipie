import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "../styles/searchStyles";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        navigate(`/search/${query}`)
      }}
    >
      <div>
        <FaSearch />
        <input
          type="text"
          placeholder="Enter a recipe name.."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </Form>
  );
};

export default Search;
