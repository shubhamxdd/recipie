import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiIndianPalace, GiChopsticks } from "react-icons/gi";
import { List } from "../styles/myStyles";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <NavLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to="/cuisine/indian">
        <GiIndianPalace />
        <h4>Indian</h4>
      </NavLink>
      <NavLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </NavLink>
    </List>
  );
};

export default Category;
