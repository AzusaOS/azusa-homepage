import React, { Component } from "react";
import CmpBulmaNavbar from "../../components/CmpBulmaNavbar/CmpBulmaNavbar.js";
import CmpBulmaFooter from "../../components/CmpBulmaFooter/CmpBulmaFooter.js";
import FirstSection from "./about";
import Features from "./features";
import ThirdSection from "./followUs";
import { Container } from "../../components/StyledAzusaCmp";

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
          <CmpBulmaNavbar />
          <FirstSection />
        </Container>
        <Features />
        <Container>
          <ThirdSection />
        </Container>
        <CmpBulmaFooter />
      </div>
    );
  }
}

export default Home;
