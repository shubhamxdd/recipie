import styled from "styled-components";
import { NavLink } from "react-router-dom";

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
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40%;
    font-size: 0.9rem;
  }
`;
const Gradient = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
`;
const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;
const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 50%;
  margin-right: 2rem;
  text-decoration: none;
  background: linear-gradient(35deg, #494949, #313131);
  height: 6rem;
  width: 6rem;
  cursor: pointer;
  transform: scale(0.7);
  padding: 0 5px;
  h4 {
    color: white;
    font-size: 0.9rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);

    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
`;
const Logo = styled(NavLink)`
  text-decoration: none;
  font-size: 1.5rem;
  font-family: "Lobster Two", cursive;
`;
const Nav = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2rem 0rem;
  svg {
    font-size: 3.5rem;
  }
`;

export { Wrapper, Card, Gradient, List, StyledNavLink, Logo, Nav };
