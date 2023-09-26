import React, { useState } from 'react';
import { technologyIcons } from './Home/Projects';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { Container, Row, Col, Card } from 'react-bootstrap';

import pythonOop from '../imgs/Projects/portfolio.png';
import simonGame from '../imgs/Projects/simonGame.png';
import clothesClassifier from '../imgs/Projects/clothesClassifier.png';
import hash from '../imgs/Projects/hash.png';
import purchasePredictor from '../imgs/Projects/purchasePredictor.png';
import dogsVsCats from '../imgs/Projects/dogsVsCats.png';
import albert from '../imgs/Projects/albert.png';
import hangman from '../imgs/Projects/hangman.png';


import '../style/Projects.css';


const projectsData = [
    {
      name: 'Portfolio',
      description: 'Here is where I share my experience, projects, knowledge and everything related to coding.',
      technologies: ['NodeJS', 'React', 'Github'],
      githubRepo: 'https://github.com/oenzocabral/Portfolio',
      image: pythonOop,
    },
    {
      name: 'Virtual Assistant',
      description: 'Albert is a voice commanded virtual assistant that heps me with everyday things, such as play music, send texts, make searches and open applications.',
      technologies: ['Python', 'Javascript', 'NodeJS'],
      githubRepo: 'https://github.com/oenzocabral/Albert',
      image: albert,
    },
    {
      name: 'Clothes Classifier',
      description: 'This is an AI model that is trained on the fashion mnist dataset. Given the picture of a piece of clothing, it is able to label it as t-shirts, trowsers, shoes, and so on.',
      technologies: ['Python', 'Tensorflow', 'Numpy'],
      githubRepo: 'https://github.com/oenzocabral/ClothesClassifier',
      image: clothesClassifier,
      host: 'https://colab.research.google.com/drive/1coMmkPZfXZUQSEueCQhhqq66BASmroiV?usp=sharing',
      hostText: 'Visit on Colab'
    },
    {
      name: 'Purchase Predictor',
      description: 'This AI model trains on binary represented user interaction data with a website, and predicts the chances of the user to purchase a product or sign a subscription.',
      technologies: ['Python', 'Tensorflow', 'Numpy'],
      githubRepo: 'https://github.com/oenzocabral/PurchasePredictor',
      image: purchasePredictor,
      host: 'https://colab.research.google.com/drive/1mXcMUXb3kKi1sOtKFwS4TaG4OvRe4QqI?usp=sharing',
      hostText: 'Visit on Colab'
    },
    {
      name: 'Simon Game',
      description: 'The Simon Game is a memory game that uses sound and color to stimulate your memory.',
      technologies: ['Javascript', 'HTML', 'CSS'],
      githubRepo: 'https://github.com/oenzocabral/SimonGame',
      image: simonGame,
      host: 'https://oenzocabral.github.io/SimonGame',
      hostText: 'Visit Website'
    },
    {
      name: 'Hash Game',
      description: 'This is a hash game that can be played on the terminal against the computer.',
      technologies: ['Python'],
      githubRepo: 'https://github.com/oenzocabral/HashGame',
      image: hash,
    },
    {
      name: 'Dog or Cat Classifier',
      description: 'This Ai model was trained on thousands of images of cats and dogs, and given an image, it is able to recognize if it is a cat or a dog.',
      technologies: ['Python', 'Tensorflow'],
      githubRepo: 'https://github.com/oenzocabral/DogsVsCatsClassifier',
      image: dogsVsCats,
      host: 'https://colab.research.google.com/drive/13HDYjNrx-y4IOjigv9RNTff43rsSuqUx?usp=sharing',
      hostText: 'Visit on Colab'
    },
    {
      name: 'Hangman Game',
      description: 'It\' your classical Hangman Game, but now you can play it online on mobile and desktop (still in development)',
      technologies: ['Javascript', 'React', 'NodeJS'],
      githubRepo: 'https://github.com/oenzocabral/HangmanGame',
      image: hangman
    }
  ];

function ProjectsPage() {
    const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  
    const handleTechnologyClick = (technology) => {
      // Toggle the selected technology
      if (selectedTechnologies.includes(technology)) {
        setSelectedTechnologies(selectedTechnologies.filter((tech) => tech !== technology));
      } else {
        setSelectedTechnologies([...selectedTechnologies, technology]);
      }
    };
  
    const filteredProjects = projectsData.filter((project) => {
        return (
          selectedTechnologies.length === 0 ||
          project.technologies.some((tech) => selectedTechnologies.includes(tech))
        );
    });
  
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <h2>My Projects</h2>
          </div>
        </div>
        {/* Filter dropdown */}
        <div className="row">
          <div className="col">
            <Dropdown as={ButtonGroup} className="mb-2">
              <Button variant="primary" className="custom-dropdown-button">
                Technologies
              </Button>
              <Dropdown.Toggle split variant="primary" id="dropdown-split-basic" />
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => setSelectedTechnologies([])}
                >
                  All
                </Dropdown.Item>
                {Object.keys(technologyIcons).map((tech, index) => (
                  <Dropdown.Item
                    key={index}
                    active={selectedTechnologies.includes(tech)}
                    onClick={() => handleTechnologyClick(tech)}
                  >
                    {technologyIcons[tech]} {tech}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            </div>
      </div>
      {/* Display filtered projects */}
      <Container className="project-section">
      <Row>
        {filteredProjects.map((project, index) => (
          <Col key={index} lg={6} md={6} sm={12}>
            <Card className="project-card custom-card">
            <div className="project-image">
                <img className='border' src={project.image} alt={project.name} />
            </div>
            <div className="project-info">
                <h3>{project.name}</h3>
                <p className='project-description'>{project.description}</p>
                <h4 className="pt-3">Technologies Used</h4>
                <div className="my-3 d-flex">
                    {project.technologies.map((tech, techIndex) => (
                    <span className='btn border mr-3 pt-3' key={techIndex}>{technologyIcons[tech]}<p className='ml-2'>{tech}</p></span>
                  ))}
                </div>
                <div className="project-buttons-container">
                  <a href={project.githubRepo} className='btn btn-light see-on-github'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-github mr-2" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.20-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.20-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.20-.82 2.20-.82.44 1.10.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.20 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                      </svg>
                      See on Github
                  </a>
                  {project.host && (
                    <a href={project.host} className='btn btn-light ml-3 check-online'>
                      {project.hostText}
                    </a>
                  )}
                </div>
            </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    );
  }
  

export default ProjectsPage;
