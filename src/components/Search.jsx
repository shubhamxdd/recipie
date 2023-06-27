import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Form } from "../styles/searchStyles";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
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
