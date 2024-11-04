import React from 'react';
import profilePhoto from '../assets/images/profile.jpg';

const AboutMe = () => (
  <section>
    <img src={profilePhoto} alt="Profile" />
    <p>Short bio about yourself.</p>
  </section>
);

export default AboutMe;
