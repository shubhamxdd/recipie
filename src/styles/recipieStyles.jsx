import styled from "styled-components";

const DetailWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  /* display: flex; */
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1rem;
  }
  li {
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
  h3 {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 1px solid black;
  margin: 0.3rem;
`;
const Info = styled.div`
  /* margin-left: 5rem; */
`;

const Img = styled.img`
  margin: 1rem 0;
  width: 350px;
  height: auto;
  object-fit: cover;
  border-radius: 1rem;
`;

export { DetailWrapper, Button, Info, Img };
