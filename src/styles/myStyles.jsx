import styled from "styled-components";

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


export { Wrapper, Card, Gradient };