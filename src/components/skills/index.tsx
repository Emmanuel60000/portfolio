// SkillsComponent.js

import React from 'react';
import getSkillsAll from "@/api/getSkills";
import Image from 'next/image';



export default async function Skills() {
  const skills = await getSkillsAll();


  
  return (
      <div className="skills-container">
          {skills.map((skill) => ( 
              <div key={skill.id} className="skill-item">
                  <p className='text-custom2'>{skill.Title}</p>
                  <Image width={50 } height={50} src={skill.Img} alt={skill.Title} className='h-16 w-fit' />
              </div>
          ))}
      </div>
  );
}
