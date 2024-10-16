import React, { useState } from 'react';
import './mcard.css'
import '../ArrowButton/arrowbutton.component'
import ArrowButton from '../ArrowButton/arrowbutton.component';


const Mcard = ({ title, vote_count, image }) =>{
  const [votes, setVotes] = useState(vote_count);

  const handleUpvote = () => {
    setVotes(votes + 1);
  }

  const handleDownvote = () => {
    if (votes > 0) {
      setVotes(votes - 1);
    }
  }

  return (
    <div className="mcard">
      <img src={image} alt={title} className="mcard-image" />
      <div className='vote-container'>
        <ArrowButton 
          direction={'up'}
          eventHandler={handleUpvote}
        />
          <p>{votes}</p>
        <ArrowButton 
          direction={'down'}
          eventHandler={handleDownvote}
        />
      </div>
    </div>
  );
}

export default Mcard