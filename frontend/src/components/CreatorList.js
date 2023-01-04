import React from 'react'
import {useState, useEffect} from 'react'
import CreatorCard from "./CreatorCard"
import "./creatorCard.css"

function CreatorList({ handleCreatorNameChange }) {

    const [creators, setCreators] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setCreators(data));
  }, []);
  if (typeof creators !== 'object' || !creators.length) {
    return <p>No creators found</p>;
  }
  return (
    <div>
        {creators.map(creator => {
        return <CreatorCard className="willywonka" key={creator.name} creator={creator} creatorName={creator.name} handleCreatorNameChange={handleCreatorNameChange} />
    })}
    </div>
  )
}

export default CreatorList