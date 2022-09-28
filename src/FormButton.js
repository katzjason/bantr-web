import React from 'react';
import JobForm from './JobForm';
import './FormButton.css';


function FormButton(props) {

  const [showJobForm, setShowJobForm] = React.useState(false);
  const [buttonClicked, setButtonClicked] = React.useState(false);
  const handleClick = event => {
    setShowJobForm(current => !current);
    setButtonClicked(current => !current);
  }
 
  return (
    <div class="form-button-container">
      <div className = "button-container">
        <a>
          <button className="centered-button" 
                  onClick={handleClick}>
            {buttonClicked ? props.clickedText : props.unclickedText}
          </button>
        </a>
      </div>
      <div>
      { showJobForm ? <JobForm /> : null}
      </div>

    </div>
  );
}

export default FormButton;