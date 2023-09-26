import React from 'react';
import me from '../imgs/me.png';
import '../style/About.css';

const moments = [
  {
    'date': 'April, 2020',
    'text': "By the end of the first month afer covid hit, I had already finished most shows on Netflix and found myself in a quite bored state. I always liked to build stuff, and in one of those bored moments, I remember something my father told me: \"You can build anything if you learn to code.\". At the first time I heard that I wasn't really interested on learning to code, but I didn't have anything better to do, so I gave it a shot. And when I saw that \"Hello World\" on my browser, I completely fell in love with it. I was so curious to understand how that worked, what was the limit of a computer's building capabilities and then, I built and hosted my first website."
  },
  {
    'date': 'June, 2021',
    'text': 'After learning the most important concepts of programming with all the free content I could find onliine, I decided to buy an Alura subscription. And after I did the first course, I never stopped. I learned so much, in such an efficient way that in less than a year I was able to build extremely complex web applications, build entire neural network models, manage databases and just let my imagination run free with my awesome new skillset'
  },
  {
    'date': 'January, 2022',
    'text': 'After gettngs Alura\'s Python and OOP degree and learning about databases I decided to explore other languages, So I went back to Javascript, which made a lot of sense, as I was getting more and more into web development. But I didn\'t stop at Javascript, I also learned Php and C# basics.'
  },
  {
    'date': 'September, 2022',
    'text': 'With all that stack on the back I started building all sorts of projects, games, websites, bots and I even built a music player. At that point I needed some more power to my applications, So I learned Django to build fast and safe backends, and in this journey to master Django I learned a lot and really developed my racional and problem solving thinking.'
  },
  {
    'date': 'July, 2023',
    'text': 'Back when I had my Alura subscription I watched 4 courses on Machine Learning and Deep Learning, and it is something that I\'m really interested in, so I decided to get back to my Machine Learning studies, this time, learning Natural Language Processing, and so I did.'
  },
  {
    'date': 'September, 2023',
    'text': 'Now, I\'m currently finishing a course about the MERN Stack and web3, and it has been one of the best courses I\'ve ever done, in fact, I only used what I learned on that course to build this Portfolio.'
  }
]

function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img
            src={me}
            alt="Enzo Cabral"
            className="img-fluid rounded-circle mr-4c"
          />
        </div>
        <div className="col-md-8">
          <h1>About Me</h1>
          <div className="timeline ml-3">
            {moments.map((moment, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-date mb-2">{moment.date}</div>
                <p>{moment.text}</p>
              </div>
            ))}
          </div>
          {/*<div className="mt-4">
            <h2>My Interests</h2>
            <p>
              You can add more text here to share your hobbies, interests, or
              anything else you'd like to include.
            </p>
          </div>*/}
        </div>
      </div>
    </div>
  );
}

export default About;
