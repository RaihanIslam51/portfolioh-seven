import React from 'react';
import HeroSection from '../Components/HeroSection';
import AboutSection from '../Components/AboutSection';
import ProjectShowSection from './ProjectShowSection'
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <AboutSection></AboutSection>
            <SkillsSection></SkillsSection>
            <ProjectShowSection></ProjectShowSection>
            <ContactSection></ContactSection>
        </div>
    );
};

export default Home;