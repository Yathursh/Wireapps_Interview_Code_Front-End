import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div style={{ paddingBottom: 30 }}>
      <a href="/Mens" style={{ textDecoration: "none", color: "#000" }}>
        <Card
          style={{
            width: "38rem",
            height: "13rem",
            borderRadius: "15px",
            backgroundColor: " #2BD9AF",
            marginTop: 40,
            display: "inline-block",
          }}
        >
          <Card.Body>
            <Card.Title style={{ marginTop: 60, fontSize: 40, color: "white" }}>
              Men's Clothing
            </Card.Title>
          </Card.Body>
        </Card>
      </a>

      <a href="/Womens" style={{ textDecoration: "none", color: "#000" }}>
        <Card
          style={{
            width: "38rem",
            height: "13rem",
            borderRadius: "15px",
            marginLeft: 80,
            marginTop: 40,
            display: "inline-block",
            backgroundColor: " #FF5E84",
          }}
        >
          <Card.Body>
            <Card.Title style={{ marginTop: 60, fontSize: 40, color: "white" }}>
              Women's Clothing
            </Card.Title>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}
