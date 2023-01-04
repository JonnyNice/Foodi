import React from 'react'
import {useState, useEffect} from 'react'
import HomeCreatorCard from "./HomeCreatorCard"
import "./creatorCard.css"

function HomeCreatorList({ handleCreatorNameChange }) {

    const [creators, setCreators] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setCreators(data));
  }, []);

  return (
    <div>
        {creators.map((creator, index) => {
            if (index >= 3) {
                return;
                }
        return <HomeCreatorCard className="home_creator_card" key={creator.username} creator={creator} handleCreatorNameChange={handleCreatorNameChange} />
    })}
    </div>
  )
}

export default HomeCreatorList