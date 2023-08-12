import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../Styles/Teams.css";

export default function TeamPlayers(props) {
  return (
    <div className='TeamPlayers' style={{ backgroundColor: 'rgb(32, 68, 102)', color: 'white' }}>
      <Container>
        <Row>
          <Col md={12} className="text-center mb-4">
            <img src={props.images} alt="" className="player-image" />
          </Col>
          <Col md={12} className="text-center">
            <h4 className="player-name"><strong>{props.name}</strong></h4>
            <div className="player-details" style={{ overflow: 'scroll', fontSize: '14px', padding: '10px' }}>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Age:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.age}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Nationality:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.nationality}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Position:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.position}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Bio:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.biography}
                </Col>
              </Row>
              <h3 className="static-heading">Statistics</h3>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Matches:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.matches}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Goals:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.goals}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Assists:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.assists}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Yellow Card:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.yellow_card}
                </Col>
              </Row>
              <Row>
                <Col md={3} className="text-md-right">
                  <strong>Red Card:</strong>
                </Col>
                <Col md={9} className="text-md-left">
                  {props.red_card}
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
