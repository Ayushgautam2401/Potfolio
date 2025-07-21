import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ayush Gautam </span>
            from <span className="purple"> Shimla, India.</span>
            <br />
            I am currently employed as a software developer at BizTecno.
            <br />
            I have completed Integrated my Bca from Himachal Pradesh University and My Mca from Panjab University
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books (fiction, self-help, or tech-related)
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring UI/UX design just for fun
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to podcasts or watching documentaries
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing story-driven or strategy game
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing story-driven or strategy game
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling to explore new places and cultures
            </li>
            <li className="about-activity">
              <ImPointRight /> Experimenting with side projects or random tech ideas
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ayush Gautam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
