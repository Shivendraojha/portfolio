import certa from '../asset/certificates/cci.jpg'
import certb from '../asset/certificates/ai.jpg'
import certc from '../asset/certificates/ana.jpg'
import certd from '../asset/certificates/ppcert.jpg'
import certe from '../asset/certificates/pi.jpg'
import React from 'react';
import '../CSS/Certification.css';

const Certification = () => {
  const awardsCertificationsData = [
   {
      title: 'GOOGLE ANALYTICS',
      source:certc,
      issuer: 'GOOGLE',
      year: '2022',
    }, 
    {
      title: 'CREATIVE INFOGRAPHICS IN POWER POINT',
      source:certd,
      issuer: 'UDEMY',
      year: 'dec 2022',
    },
     
    {
      title: 'INTERNSHIP IN AI&ML',
      source:certb,
      issuer: 'YBI',
      year: 'AUG 2023',
    },
    
   
    {
      title: 'PYTHON PROGRAMMING IN DSA INTERNSHIP',
      source:certe,
      issuer: 'YBI',
      year: 'AUG 2023',
    },
    {
      title: 'INTERNSHIP IN WEB DEVELOPMENT',
      issuer: 'CODE CLAUSE',
      source:certa,
      year: 'FEB 2024',
    }
  ];

  return (
    <div className="awards-certifications-container">
      <h1>Awards & Certifications</h1>

      <div className="awards-certifications-list">
        {awardsCertificationsData.map((item, index) => (
          <div key={index} className="awards-certifications-entry">
            <h2>{item.title}</h2>
            <img src={item.source} className='imgcert'/>
            <p> Issuer: {item.issuer}</p>
            <p> Year: {item.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certification;
