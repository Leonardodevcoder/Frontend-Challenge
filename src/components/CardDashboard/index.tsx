import React from "react";
import { Card } from "react-bootstrap";


interface ICard {
  title: string;
  value?: any;
}


const CardDashboard: React.FC<ICard> = ({ title, value }) => {
  return (
    <Card style={{width: "300px", marginTop: "20px", border: "none", boxShadow: "0px 8px 24px 0px #00000014",}}>
      <Card.Body style={{height: "230px"}}>
        <Card.Title style={{marginTop: "40px", marginLeft: "20px", fontSize: "14px"}}>{title}</Card.Title>
        <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginTop: "50px", marginLeft: "60px", fontSize: "32px"}}>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};


export default CardDashboard;
