import React from 'react';
import FormButton from './FormButton';
import JobForm from './JobForm';
import './ButtonSection.css';


const jobsButton = {
  unclickedText: 'Explore Opportunities',
  clickedText: 'Hide Opportunities',
}

function ButtonSection(props) {
  return (
    <div className="section-container">
      <h1 className="section-title">Work at Bantr</h1>
      <p className="section-description">
        We’re a team of TV fanatics looking to reshape the way that our
        favorite series’ are discussed into a more prosocial, equitable,
        and immersive experience. Looking to join the team? Check out our
        updated list of job postings below.
      </p>

      <FormButton clickedText={jobsButton.clickedText}
        unclickedText={jobsButton.unclickedText} />
    </div>
  );
}

export default ButtonSection;