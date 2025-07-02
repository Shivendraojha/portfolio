import React from 'react';
import '../CSS/SoftSkill.css';

const SoftSkills = () => {
    const softSkillsData = [
        '"Storytelling"',
        '"Adaptability"',
        '"Digital Fluency"',
        '"Cultural Sensitivity"',
        '"Boundary Spanning"',
        '"Emotional Intelligence"',
        '"Curiosity and Learning Agility"',
    ];

    return (
        <div className="soft-skills-container">
            <h1>Soft Skills</h1>

            <div className="soft-skills-list">
                {softSkillsData.map((skill, index) => (
                    <div key={index} className="soft-skill">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SoftSkills;
