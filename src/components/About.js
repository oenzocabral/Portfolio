import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import me from '../imgs/me.png';

const About = () => {
  return (
    <Container className="about-me">
      <Row>
        <Col md={4}>
          <Image src={me} alt="Your Name" roundedCircle fluid />
        </Col>
        <Col md={8}>
          <h2>About Me</h2>
          <p>
            Hello, I'm Your Name, a passionate web developer with a strong
            interest in creating responsive and user-friendly websites. I have
            experience in front-end development using technologies like React,
            Bootstrap, and CSS to bring web designs to life.
          </p>
          <p>
            My goal is to build websites and web applications that not only
            look great but also provide an excellent user experience. I enjoy
            solving problems, learning new technologies, and collaborating with
            others to create innovative solutions.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies,
            working on personal projects, or enjoying outdoor activities. Feel
            free to reach out if you'd like to collaborate or have any
            questions.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;