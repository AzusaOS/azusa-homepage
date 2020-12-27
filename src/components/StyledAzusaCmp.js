import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const PresentationContainer = styled.div`
  margin-bottom: 10%;
`;

export const CenterSection = styled.div`
  padding-top: 2%;
  padding-left: 2%;
  padding-right: 2%;
  text-align: center;
`;

export const LeftDiv = styled(CenterSection)`
  display: -webkit-box;
  margin-bottom: 2%;
  display: -webkit-box;
`;

export const CenterDiv = styled(CenterSection)`
  margin-bottom: 2%;
`;

export const FeaturesContainer = styled.div`
  background: linear-gradient(
    0deg,
    #c7d8f3 0%,
    #bbc3ed 0%,
    #9076d6 61%,
    #8c6fd4 71%,
    #8059ce 100%
  );
  box-shadow: 0px 3px 6px #00000029;
  transform: rotate(3deg);
  margin-left: -7%;
  margin-right: -7%;
  margin-top: 5%;
  padding-top: 5%;
  padding-bottom: 5%;
`;

export const Box = styled.div`
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 0.5em 1em -0.125em rgba(10, 10, 10, 0.1),
    0 0 0 1px rgba(10, 10, 10, 0.02);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
  width: 70%;
  margin-top: 5%;
  margin-left: auto;
  margin-right: auto;
`;

export const ContactBox = styled(Box)`
  padding-bottom: 0;
  align: center;
`;

export const NewsBox = styled(Box)`
  width: 100%;
  align: center;
`;

export const FeaturesBox = styled(Box)`
  width: 100%;
  align: center;
  border-radius: 37px;
  margin-bottom:5%;
`;

export const PresentationBox = styled(Box)`
  width: 100%;
  margin-top: 1%;
`;

export const StyledButton = styled.button`
  background-color: #8059ce;
  color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  margin-top: 8%;
  font-family: Helvetica;
`;

export const StyledContactButton = styled(StyledButton)`
  display: block;
  width: auto;
  margin-right: 0;
  margin-top: 5%;
  padding-left: 100px !important;
  padding-right: 100px !important;
  &:disabled {
    color: #363636;
  }
`;

export const StyledLink = styled(Link)`
  color: #707070;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: 300;
`;

export const StyledH1 = styled.h1`
  color: #707070;
  font-size: 27px;
  font-family: Helvetica;
  text-align: left;
`;

export const StyledCenterH1 = styled(StyledH1)`
  text-align: center;
`;

export const StyledH1BotBor = styled(StyledH1)`
  border-bottom: 2px solid #8059ce;
  margin-bottom: 5%;
  margin-left: 10%;
  display: inline;
`;

export const StyledPresentationH1 = styled(StyledH1BotBor)`
  padding-bottom: 0;
  margin: 0;
`;

export const StyledContactH1 = styled(StyledH1)`
  font-size: 27px;
  border-bottom: 2px solid #8059ce;
  display: inline;
`;

export const NewsTitle = styled(StyledH1BotBor)`
  font-size: 21px;
  border-bottom: 2px solid #8059ce;
  display: block;
  color: #000000;
  margin-left: 0;
`;

export const StyledP = styled.p`
  color: #707070;
  font-size: 17px;
  font-family: Helvetica;
  padding-top: 10px;
  text-align: left;
`;

export const StyledCenterP = styled(StyledP)`
  text-align: center;
  font-size: 12px;
`;

export const StyledContactP = styled(StyledP)`
  text-align: left;
  padding-top: 2%;
  padding-bottom: 2%;
`;

export const StyledErrorP = styled(StyledP)`
  text-align: left;
  padding-top: 2%;
  padding-bottom: 2%;
  
`;

export const StyledFooterP = styled(StyledP)`
  padding-top: 0%;
`;

export const StyledPresentationP = styled(StyledFooterP)`
  padding-top: 0%;
  padding-top: 3px;
  padding-bottom: 3px;
  font-size: 14px;
`;

export const StyledFooterLink = styled(Link)`
  color: #707070;
  font-size: 15px;
  font-family: Helvetica;
  font-weight: 300;
  display: block;
`;
