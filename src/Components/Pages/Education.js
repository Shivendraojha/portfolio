import React from 'react';
import '../CSS/Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'I.E.T. Dr. RML Avadh University Ayodhya U.P.',
      degree: 'Bachelor of Technology in Information Technology',
      graduationYear: '2024',
      Score: '70 ap.',
    },
    {
      institution: 'C.L. Inter College Chhitepatti Sultanpur UP',
      degree: 'Intermediate {Mathematics} - XII',
      graduationYear: '2020',
      Score: '69',
    },
    // Add more education entries as needed
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>

      <div className="education-list">
        {educationData.map((education, index) => (
          <div key={index} className="education-entry">
            <h2>{education.institution}</h2>
            <p> {education.degree}</p>
            <p> Year : {education.graduationYear}</p>
            <p> Score : {education.Score}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
