import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Islam Osmonov </span>
            from <span className="purple"> Bishkek, Kyrgyzstan.</span>
            <br />
            I am student at the IT College.
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Islam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
