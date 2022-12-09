import React from "react";
import { Card, Col, Input, Row, Typography } from "antd";
import BocaCode from'../Assets/BocaCode.png'
import IronHack from '../Assets/IronHack.png'
import TheCodeSchool from '../Assets/TheCodeSchool.png'

const { Title } = Typography;
const { Search } = Input;

export default function HomeHero(){
    
// const HomeHero = () => {};

return (
  <div className="home-hero">
    <div className="home-hero__search"></div>
    <Title className="home-hero__title">Real Reviews from Real People  </Title>
    <Search
      placeholder="Find the Coding Program that will Launch your future'"
      size="large"
      enterButton
      className="home-hero__search-input"
    />
    <Row  className="cardRow">

      <Col xs={12} md={6}> 
      <Card className="home-hero__cards" cover={<img className="cardImg" alt="Boca Code" src={BocaCode} />}>Boca Code</Card>
      </Col>

      <Col xs={12} md={6}>
      <Card className="home-hero__cards" cover={<img className="cardImg" alt="Iron Hack" src={IronHack} />}>Iron Hack</Card>
      </Col>

      <Col xs={0} md={6}>
      <Card className="home-hero__cards" cover={<img className="cardImg" alt="The Code School" src={TheCodeSchool} />}>The Coder School</Card>
      </Col>
    </Row>
  </div>
); }