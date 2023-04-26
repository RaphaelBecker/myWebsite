import React from "react";
import { Card, Button } from "react-bootstrap";

const ProjectCard = () => {
  return (
    <Card
      style={{
        width: "18rem",
        backgroundImage: "url('project0.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
