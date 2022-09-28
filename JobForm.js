import React from 'react';
import './JobForm.css';
import JobListing from './JobListing';
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route, Navigate,} from 'react-router-dom';


const softwareEngineerIntern = {
  name: 'Software Engineering Intern',
  description: 'description',
  location: 'Remote',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ3j1QtCOPiPmTUcv7ezaYjkEGe84bnU-dXqJKKSWqDx2M3w/viewform',
}

const dataAnalystIntern = {
  name: 'Data Analyst Intern',
  description: 'description',
  location: 'Remote',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ3j1QtCOPiPmTUcv7ezaYjkEGe84bnU-dXqJKKSWqDx2M3w/viewform',
}

const socialMediaMarketerIntern = {
  name: 'Social Media Marketing Intern',
  description: 'description',
  location: 'Remote',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ3j1QtCOPiPmTUcv7ezaYjkEGe84bnU-dXqJKKSWqDx2M3w/viewform',
}

const contentCreatorIntern = {
  name: 'Content Creator Intern',
  description: 'description',
  location: 'Remote',
  link: 'https://docs.google.com/forms/d/e/1FAIpQLSdJ3j1QtCOPiPmTUcv7ezaYjkEGe84bnU-dXqJKKSWqDx2M3w/viewform',
}


function JobForm(props){
  return(
    <div className="job-listing-container">
      <h2>Fall 2022 Internships</h2>
      <JobListing jobName={softwareEngineerIntern.name}
                  jobDescription={softwareEngineerIntern.description}
                  jobLocation={softwareEngineerIntern.location}
                  jobLink={softwareEngineerIntern.link} />
      
      <JobListing jobName={dataAnalystIntern.name}
                  jobDescription={dataAnalystIntern.description}
                  jobLocation={dataAnalystIntern.location}
                  jobLink={dataAnalystIntern.link} />

      <JobListing jobName={socialMediaMarketerIntern.name}
                  jobDescription={socialMediaMarketerIntern.description}
                  jobLocation={socialMediaMarketerIntern.location}
                  jobLink={socialMediaMarketerIntern.link} />

      <JobListing jobName={contentCreatorIntern.name}
                  jobDescription={contentCreatorIntern.description}
                  jobLocation={contentCreatorIntern.location}
                  jobLink={contentCreatorIntern.link} />
    
   
      {/* <h2>React Router Test
        <Routes>
          <Route path= "softwareintern" element={<SoftwareIntern />} />
        </Routes>
        <Link to= "./softwareintern">HEY2</Link>;
      </h2> */}
    </div>
  );
}

export default JobForm;