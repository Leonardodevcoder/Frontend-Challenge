/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Component ,useEffect, useState } from "react";
import { Card, Col,Container, Nav, Navbar, Row } from "react-bootstrap";
import { ImMenu } from "react-icons/im";
import CardDashboard from "../components/CardDashboard";
import { Doughnut } from "react-chartjs-2";
import Select from "react-select";
import { getDogs } from "../api/api";

import "./styles.css";
import { DogProps } from "../models/DogProps";

interface InputSelectProps {
  value: number;
  label: string;
}


const Dashboard: React.FC = () => {
  const [dogs, setDogs] = useState([]);
    
  

  const dogsOptions: InputSelectProps[] = [];
  const dogsOptionsOne: InputSelectProps[] = [];
  const dogsOptionsTwo: InputSelectProps[] = [];
 

  const listAllDogs = async () => {
    const allDogs = await getDogs();

    allDogs.map((cat: DogProps) =>
      dogsOptions.push({ value: cat.id, label: cat.name }),
            
    );
    allDogs.map((cat: DogProps) =>
    dogsOptionsOne.push({ value: cat.id, label: cat.origin }),
          
  );
  allDogs.map((cat: DogProps) =>
  dogsOptionsTwo.push({ value: cat.id, label: cat.temperament }),
        
  );

  
};
  
  
 

  useEffect(() => {
    listAllDogs();
  });

  const bar = {
    labels: 'My First Dataset',
    datasets: [
      {
        label: 'Dataset 1',
        data: [100, 200, 50],
        backgroundColor: 'rgba(135, 220, 219, 1)',
       
      },
      {
        label: 'Dataset 2',
        data: [200, 24, 230],
        backgroundColor: 'rgba(61, 154, 233, 1)',
      }
    ]
  }

  //// charts
    const data = {
    labels: [
      
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
        
      ],
      hoverOffset: 4
    }]
  };
  const data1 = {
    labels: [
      
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [30, 100],
      backgroundColor: [
        'rgba(242, 153, 74, 1)',
        'rgba(242, 201, 76, 1)',
        
      ],
      hoverOffset: 4
    }]
  };
  const data2 = {
    labels: [
      
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [50, 100],
      backgroundColor: [
        'rgba(135, 220, 219, 1)',
        'rgba(61, 154, 233, 1)'
        
      ],
      hoverOffset: 4
    }]
  };
  return (

    <div>
       <>
       <Row style={{marginTop:"50px", display: "flex", flexDirection: "row", justifyContent: "flex-start"}} className="justify-content-left">
         <Col>
         <Navbar bg="light" variant="light"  >
          <Container>
            <Nav>
              <Nav.Link href="">Nome da campanha</Nav.Link>
              <Nav.Link style={{color: "#4DCBFF"}} active className="text-nav-active">
                Perfil alvo
              </Nav.Link>
              <Nav.Link href="">Compromissos de saúde</Nav.Link>
              <Nav.Link href="">Acompanhamento</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
         </Col>
       </Row>
       <Row>
        <Col style={{ display: "flex", justifyContent: "center", }}>
        <Card style={{ width: "415px", marginTop: "50px", height: "500px", border: "none", boxShadow: "0px 8px 24px 0px #00000014",}} >
    
          <Card.Body style={{marginTop: "10px", height: "200px", }}>
          {/* <img src={require('../../assets/images/caracteristicasIcon.svg')} /> */}
          <Card.Title >Características</Card.Title>
          <Nav.Link>
            <Row>
              <Col>
                <Nav style={{color: "#4DCBFF", fontSize: "16px" }}>Dos Contratos</Nav>
              </Col>
            </Row>
          </Nav.Link>
          <Card.Text>
            <Row style={{marginBottom: '15px'}}>
              <Col>
              <p className="textInsideCaracteristicas">
                Grupo Econômico
              </p>  
              <Select options={dogsOptions} className="inputSelect"/>
              </Col>
            </Row>
            <Row style={{marginBottom: '15px'}}>
              <Col>
                <p className="textInsideCaracteristicas">
                  Filial
                </p>  
                <Select options={dogsOptionsOne} className="inputSelect"/>
              </Col>
            </Row>
            <Row style={{marginBottom: '15px'}}>
              <Col>
                <p className="textInsideCaracteristicas">
                  Plano
                </p>
                <Select options={dogsOptionsTwo} className="inputSelect"/>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
  
        </Card>
        </Col>

        <Col xs={8}>
          <Container style={{ marginTop: "50px", marginRight: "10px" }}> 
            <Card.Header as="h5">
              <ImMenu color="#3D9AE9" />
              Insigts
            </Card.Header>
            <Row>
              <Col>
                <CardDashboard
                  title="Pessoas elegíveis"
                  value= "159.328"
                />
              </Col>
              <Col>
                <CardDashboard
                  title="Com celular cadastrado"
                  value={"109.268"}
                />
              </Col>
              <Col>
                <CardDashboard
                  title="% de compromissos atrasados"
                  value={<Doughnut data={data} />}
                />
              </Col>
            </Row>
          </Container>
          <Container style={{marginTop: "50px", marginRight: "10px" }}> 
           <Row>
             <Col>
              <Card style={{alignItems: "flex-start", marginTop: "12px",border: "none", boxShadow: "0px 8px 24px 0px #00000014",}}>
                <Card.Body style={{height: "230px"}}>
                  <Card.Title style={{marginTop: "30px", marginLeft: "20px", fontSize: "14px"}}>Titularidade</Card.Title>
                  <div style={{display: "flex", flexDirection: "row"}}>
                    <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginTop: "50px", marginLeft: "60px", fontSize: "32px"}}><Doughnut data={data1} /></Card.Text>
                    <div style={{display: "flex", flexDirection: "column"}}> 
                      <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginLeft: "60px", fontSize: "12px"}}>Titulares</Card.Text>
                      <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginLeft: "60px", fontSize: "12px"}}>Dependentes</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
             </Col>
             <Col>
            <Card style={{marginTop: "12px", border: "none", boxShadow: "0px 8px 24px 0px #00000014",}}>
                <Card.Body style={{height: "230px"}}>
                  <Card.Title style={{marginTop: "30px", marginLeft: "8px", fontSize: "14px"}}>Gênero</Card.Title>
                  <div style={{display: "flex", flexDirection: "row"}}>
                    <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginTop: "50px", marginLeft: "60px", fontSize: "32px"}}><Doughnut data={data2} /></Card.Text>
                    <div style={{display: "flex", flexDirection: "column"}}> 
                      <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginLeft: "60px", fontSize: "12px"}}>Feminino</Card.Text>
                      <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginLeft: "60px", fontSize: "12px"}}>Masculino</Card.Text>
                    </div>
                  </div>
                </Card.Body>
              </Card>
             </Col>
           </Row>
          </Container>
          <Container>
            <Row>
              <Col>
              <Card style={{width: "1210px", marginTop: "20px", border: "none", boxShadow: "0px 8px 24px 0px #00000014",}}>
                <Card.Body style={{height: "200px"}}>
                  <Card.Title style={{marginTop: "30px", marginLeft: "20px", fontSize: "14px"}}>Distribuição por idade</Card.Title>
                  <Card.Text style={{alignSelf: "center", alignItems: "center", display: "flex", marginTop: "50px", marginLeft: "60px", fontSize: "32px"}}>Gráfico</Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
      
        </Col>
       </Row>

  <br/>
  </>
     

     

      
     
    </div>
    
  );
};

export default Dashboard;
