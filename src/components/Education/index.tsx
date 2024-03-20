// EducationComponent.js
'use client'
import React, { useEffect, useState } from 'react';
import getEducationAll from "@/api/getEducation";

interface Education {
  id: bigint;
  Title: string | null;
  Description: string | null;
  Dates: Date | null;
}

export default function EducationComponent() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    async function fetchEducation() {
      try {
        const educationData = await getEducationAll();
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching education:', error);
      }
    }
    fetchEducation();
  }, []);

  return (
    <div>
      <h2>Éducation</h2>
      <div>
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.Title}</h3>
            <p>{edu.Description}</p>
            {/* Autres informations sur l'éducation */}
          </div>
        ))}
      </div>
    </div>
  );
}

