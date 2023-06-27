import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiIndianPalace, GiChopsticks } from "react-icons/gi";
import { List, StyledNavLink } from "../styles/myStyles";
// import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <List>
      <StyledNavLink to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </StyledNavLink>
      <StyledNavLink to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </StyledNavLink>
      <StyledNavLink to="/cuisine/indian">
        <GiIndianPalace />
        <h4>Indian</h4>
      </StyledNavLink>
      <StyledNavLink to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </StyledNavLink>
    </List>
  );
};

export default Category;
