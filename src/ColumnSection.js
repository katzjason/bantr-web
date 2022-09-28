import React from 'react';
import './ColumnSection.css';
import MascotColumn from './MascotColumn'

const feature1 = {
  title: 'Conversing Anonymously',
  description: 'Don\'t hold back! Whether it\'s venting about The Bachelorette or relishing in the House of the Dragon premiere, what happens in the chat room, stays in the chat room.',
  imageLink: process.env.PUBLIC_URL + "/assets/images/confused-macaw.svg",
}

const feature2 = {
  title: 'Engaging Spoiler-free',
  description: 'Behind on a show? Don\'t fret, prompts and groups are categorized by series episode, so spoilers are a thing of the past!',
  imageLink: process.env.PUBLIC_URL + "/assets/images/no-comment-macaw.svg",
}

const feature3 = {
  title: 'Getting the Inside Scoop',
  description: 'With verified directors already Bantr-ing, you can learn even more about the production of your favorite shows without spending hours scavening online',
  imageLink: process.env.PUBLIC_URL + "/assets/images/excited-macaw.svg",
}

function ColumnSection(props) {
  return (
    <div className="column-section-container">
      <h1 className="column-section-title">What is Bantr-ing?</h1>
      <p className="column-section-description">Learn more about the features
        that make Bantr stand out from the rest.</p>
      <div className="feature-container">

        <MascotColumn title={feature1.title}
          description={feature1.description}
          imageLink={feature1.imageLink} />

        <MascotColumn title={feature2.title}
          description={feature2.description}
          imageLink={feature2.imageLink} />

        <MascotColumn title={feature3.title}
          description={feature3.description}
          imageLink={feature3.imageLink} />

      </div>
    </div>
  );
}

export default ColumnSection;