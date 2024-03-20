// ProjectComponent.js
'use client'
import React, { useEffect, useState } from 'react';
import getProjectsAll from "@/api/getProjects";

interface Project {
  id: bigint;
  Img: string | null;
  Title: string | null;
  Description: string | null;
  Slug: string | null;
  GitURL: string | null;
  WebURL: string | null;
  Skills: string | null;
}

export default function ProjectComponent() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const projectsData = await getProjectsAll();
        setProjects(projectsData);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <div>
      <h2>Projets</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.Title}</h3>
            <p>{project.Description}</p>
            {/* Autres informations sur le projet */}
          </div>
        ))}
      </div>
    </div>
  );
}

