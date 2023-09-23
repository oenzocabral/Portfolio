import React, { useState, useEffect, useCallback } from 'react';
import Certificate from './CertificateCarousel/Certificate';

import pythonOop from '../../imgs/Certificates/python-oop.png';
import deepLearning from '../../imgs/Certificates/deep-learning.png';
import jsLanguage from '../../imgs/Certificates/js-explloring-the-language.png';
import mlMultiDimData from '../../imgs/Certificates/ml-multidimensional-data.png';
import responsiveLayouts from '../../imgs/Certificates/responsive-layouts.png';

const certificatesData = [
  {
    imageUrl: pythonOop,
    title: 'Python and Object Oriented Programming',
    projects: [
      { name: 'Hash Game', repoUrl: 'https://github.com/oenzocabral/HashGame' },
      { name: 'Hangman Game', repoUrl: 'https://github.com/oenzocabral/HangmanGame' },
      { name: 'Albert, the personal assistant', repoUrl: 'https://github.com/oenzocabral/Albert'},
      { name: 'Animal Classifier', repoUrl: 'https://github.com/oenzocabral/AnimalClassifier'}
    ],
  },
  {
    imageUrl: deepLearning,
    title: 'Deep Learning: How the Network Learns',
    projects: [
      { name: 'Clothes Classifier', repoUrl: 'https://github.com/oenzocabral/AnimalClassifier'},
      { name: 'Handwriting Classifier', repoUrl: 'https://github.com/oenzocabral/HandwritingClassifier'},
      { name: 'Person Classifier', repoUrl: 'https://github.com/oenzocabral/PersonClassifier'},
    ],
  },
  {
    imageUrl: jsLanguage,
    title: 'Javascript: Exploring the Language',
    projects: [
      { name: 'Simon Game', repoUrl: 'https://github.com/oenzocabral/SimonGame'},
      { name: 'Day Checkout Website', repoUrl: 'https://github.com/oenzocabral/DayCheckout'}
    ],
  },
  {
    imageUrl: mlMultiDimData,
    title: 'Machine Learning: Dealing with Multi-dimensional Data',
    projects: [
      { name: 'Dog or Cat Classifier', repoUrl: 'https://github.com/oenzocabral/AnimalClassifier'}
    ]
  },
  {
    imageUrl: responsiveLayouts,
    title: 'Responsive Layouts: Working with Mobile',
    projects: [
      {name: 'My Portfolio', repoUrl: 'https://github.com/oenzocabral/Portfolio'},
      {name: 'Day Checkout Website', repoUrl: 'https://github.com/oenzocabral/DayCheckout'}
    ]
  }
];

const CertificateCarousel = ({ certificates }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCertificate = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  }, [certificates]);

  const prevCertificate = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  }, [certificates]);

  useEffect(() => {
    const intervalId = setInterval(nextCertificate, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, [certificates, nextCertificate]); // Include nextCertificate in the dependency array

  return (
    <div className="certificates-carousel">
      <div className="navigation">
        <button onClick={prevCertificate}>Previous</button>
        <button onClick={nextCertificate}>Next</button>
      </div>
      <Certificate {...certificates[currentIndex]} />
    </div>
  );
}

export default CertificateCarousel;
export { certificatesData };
