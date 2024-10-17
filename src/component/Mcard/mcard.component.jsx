import React, { useState } from 'react';
import './mcard.css'
import ArrowButton from '../ArrowButton/arrowbutton.component';


const Mcard = ({ title, vote_count, image,pageEventHandler,mIdSetter,uniqueId }) =>{
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
      <img src={image}
           alt={title} className="mcard-image"
           onClick={()=>{
             pageEventHandler(1)
             mIdSetter(uniqueId)
           }} />
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