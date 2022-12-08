import React from "react";
import { Card, Col, Input, Row, Typography } from "antd";

// import IronHack from '../Assets/IronHack'
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
    <Title className="home-hero__title">Find your future program here </Title>
    <Search
      placeholder="Find the Coding Program that will Launch your future'"
      size="large"
      enterButton
      className="home-hero__search-input"
    />
    <Row gutter={12} className="home-hero__cards">

      <Col xs={12} md={6}> 
      <Card cover={<img alt="Boca Code" src={BocaCode} />}>Boca Code</Card>
      </Col>

      <Col xs={12} md={6}>
      <Card cover={<img alt="Iron Hack" src={IronHack} />}>Iron Hack</Card>
      </Col>

      <Col xs={0} md={6}>
      <Card cover={<img alt="The Code School" src={TheCodeSchool} />}>The Coder School</Card>
      </Col>
      <Col xs={0} md={6}></Col>
    </Row>
  </div>
);
}