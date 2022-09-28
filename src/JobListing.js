import React from 'react'
import './JobListing.css';

function JobListing(props){
  return(
    <div className= "listing-container">
      <a href= {props.jobLink}
         className= "job-title">
        {props.jobName}
      </a>
      <p className= "job-location">{props.jobLocation}</p>
    </div>
  );
}


export default JobListing;