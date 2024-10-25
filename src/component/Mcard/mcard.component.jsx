import React, { useState } from 'react';
import './mcard.css'
import ArrowButton from '../ArrowButton/arrowbutton.component';
import { useNavigate } from 'react-router-dom';


const Mcard = ({ title, vote_count, image,uniqueId}) =>{
  const [votes, setVotes] = useState(vote_count);
  const navigate = useNavigate();
  const handleUpvote = () => {
    updateVoteCount("up")
  }

  const handleDownvote = () => {
    if (votes > 0) {
      updateVoteCount("down")
    }
  }

  const updateVoteCount = async (valueChange) => {
    try{
      const postResponse = await fetch(
        `https://rancid-tomatillos-api-cc6f59111a05.herokuapp.com/api/v1/movies/${uniqueId}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({vote_direction: valueChange}), 
        }
      )
      const newData = await postResponse.json()
      setVotes(newData.vote_count)

    } catch (err){
      console.log(err)
    }
  }


  return (
    <div className="mcard">
      <img src={image}
           alt={`${title} poster`} className="mcard-image"
           tabIndex={0}
           onClick={()=>{
            navigate(`/${uniqueId}`)
           }
           }
           onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
            navigate(`/${uniqueId}`)
            }
          }}
           aria-label={`View details for ${title}`}
          />
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