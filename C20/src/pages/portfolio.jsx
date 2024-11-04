import React from 'react';
import Project from '../components/project';

const projects = [
  // Add each project with title, image, app link, and repo link
  { title: 'Project 1', image: '/path/to/image1.jpg', appLink: '#', repoLink: '#' },
  // ...add more projects
];

const Portfolio = () => (
  <section>
    <h2>Portfolio</h2>
    <div className="project-list">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Portfolio;
