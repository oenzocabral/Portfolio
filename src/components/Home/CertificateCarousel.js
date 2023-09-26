import React, { useState, useEffect, useCallback } from 'react';
import Certificate from './CertificateCarousel/Certificate';

import pythonOop from '../../imgs/Certificates/python-oop.png';
import deepLearning from '../../imgs/Certificates/deep-learning.png';
import jsLanguage from '../../imgs/Certificates/js-explloring-the-language.png';
import mlMultiDimData from '../../imgs/Certificates/ml-multidimensional-data.png';
import responsiveLayouts from '../../imgs/Certificates/responsive-layouts.png';
import pythonDataSciencce from '../../imgs/Certificates/pythonDataScience.png';
import pythonDataSciencePandas from '../../imgs/Certificates/pythonDataSciencePandas.png';
import mlClassification from '../../imgs/Certificates/mlClassification.png';
import djangoModels from '../../imgs/Certificates/djangoModels.png';

const certificatesData = [
  {
    imageUrl: pythonOop,
    title: 'Python and Object Oriented Programming',
    projects: [
      { name: 'Hash Game', repoUrl: 'https://github.com/oenzocabral/HashGame' },
      { name: 'Albert, the personal assistant', repoUrl: 'https://github.com/oenzocabral/Albert'},
      { name: 'Dog or Cat Classifier', repoUrl: 'https://github.com/oenzocabral/DogVsCatClassifier'}
    ],
  },
  {
    imageUrl: deepLearning,
    title: 'Deep Learning: How the Network Learns',
    projects: [
      { name: 'Clothes Classifier', repoUrl: 'https://github.com/oenzocabral/ClothesClassifier'},
      { name: 'Handwriting Classifier', repoUrl: 'https://github.com/oenzocabral/HandwritingClassifier'},
    ],
  },
  {
    imageUrl: jsLanguage,
    title: 'Javascript: Exploring the Language',
    projects: [
      { name: 'Simon Game', repoUrl: 'https://github.com/oenzocabral/SimonGame'},
    ],
  },
  {
    imageUrl: mlMultiDimData,
    title: 'Machine Learning: Dealing with Multi-dimensional Data',
    projects: [
      { name: 'Dog or Cat Classifier', repoUrl: 'https://github.com/oenzocabral/DogVsCatClassifier'}
    ]
  },
  {
    imageUrl: responsiveLayouts,
    title: 'Responsive Layouts: Working with Mobile',
    projects: [
      {name: 'My Portfolio', repoUrl: 'https://github.com/oenzocabral/Portfolio'},
    ]
  },
  {
    imageUrl: djangoModels,
    title: 'Django: Models, Routes and Views',
    projects: [

    ]
  },
  {
    imageUrl: pythonDataSciencce,
    title: 'Python for Data Science',
    projects: [
      {name: 'Car Price Predictor', repoUrl: 'https://github.com/oenzocabral/CarPricePredictor'}
    ]
  },
  {
    imageUrl: pythonDataSciencePandas, 
    title: 'Python for DS: Functions, Packages and Pandas',
    projects: [
      {name: 'Car Price Predictor', repoUrl: 'https://github.com/oenzocabral/CarPricePredictor'}
    ]
  },
  {
    imageUrl: mlClassification,
    title: 'Machine Learning: Classificatin with SKLearn',
    projects: [
      {name: 'Handwriting Recognizer', repoUrl: 'https://github.com/oenzocabral/HandwritingRecognizer'}
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
  }, [certificates, nextCertificate]);

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
