import React from 'react';
import '../CSS/Hobbies.css';

const Hobbies = () => {
    const hobbiesData = [
        {
            title: 'Sketching',
            description: '"Sketching, allowing me to capture moments and tell unique stories through art"',
        },
        {
            title: 'Videography',
            description: '"Capturing moments and telling stories through videos."',
        },

        {
            title: 'Traveling',
            description: '"Traveling is my passion for exploring new places and creating lasting memories."',
        },

    ];

    return (
        <div className="hobbies-container">
            <h1>HOBBIES</h1>

            <div className="hobbies-list">
                {hobbiesData.map((hobby, index) => (
                    <div key={index} className="hobby">
                        <h2>{hobby.title}</h2>
                        <p>{hobby.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Hobbies;
