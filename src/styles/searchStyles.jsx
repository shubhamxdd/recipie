import { styled } from "styled-components";

const Form = styled.form`
  margin: 0rem 10rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 0.84rem;
    color: white;
    width: 100%;
    padding: 0.5rem 2rem;
    border: none;
    outline: none;
    border-radius: 1rem;
  }
  svg {
    position: absolute;
    top: 50%;
    left: -1%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export { Form };
