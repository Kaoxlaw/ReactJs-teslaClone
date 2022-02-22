import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section 
        title="Model-S"
        desciption="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftBtnTest="Custom order"
        rightBtnTest="Existing inventory"
      />
      <Section 
        title="Model-Y"
        desciption="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftBtnTest="Custom order"
        rightBtnTest="Existing inventory"
      />
      <Section 
      title="Model 3"
        desciption="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftBtnTest="Custom order"
        rightBtnTest="Existing inventory" />
      <Section 
        title="Model X"
        desciption="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftBtnTest="Custom order"
        rightBtnTest="Existing inventory"
      />
      <Section 
        title="Lowest Cost Solar Panels in America"
         desciption="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnTest="Order now"
        rightBtnTest="Learn more"
      />
       <Section 
        title="Solar for New Roofs"
         desciption="Solar Roof Cost Less Than a New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnTest="Order now"
        rightBtnTest="Learn more"
      />
       <Section 
        title="Accessories"
         desciption=""
        backgroundImg="accessories.jpg"
        leftBtnTest="Shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
