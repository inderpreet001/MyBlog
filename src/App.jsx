import "./App.css";
import styled from "styled-components";
import Card from "./components/Card";

function App() {
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec fermentum ante. Donec nec est sodales, tristique tortor vel, tristique ligula. Sed id lorem libero. Nam rhoncus ultricies metus ac congue.";
  const Title = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: Green;
    margin-bottom: 70px;
  `;

  const Grid = styled.section`
    display: grid;
    grid-template-columns: auto auto auto;
    padding: 10px;
    margin-left: 150px;
    margin-right: 150px;
  `;

  return (
    <>
      <Title>My Blog</Title>

      <Grid>
        <Card
          title={"First Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
        <Card
          title={"Second Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
        <Card
          title={"Third Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
        <Card
          title={"Fourth Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
        <Card
          title={"Fifth Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
        <Card
          title={"Sixth Blog"}
          description={description}
          date={"20/7/2023"}
        ></Card>
      </Grid>
    </>
  );
}

export default App;
