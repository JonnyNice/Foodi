import React from 'react'
import {useState, useEffect} from 'react'
import HomeCreatorCard from "./HomeCreatorCard"
import "./creatorCard.css"

function HomeCreatorList({ handleCreatorNameChange }) {

    const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
        {users.map((user, index) => {
            if (index >= 3) {
                return;
                }
        return <HomeCreatorCard className="home_creator_card" key={user.username} user={user} handleCreatorNameChange={handleCreatorNameChange} />
    })}
    </div>
  )
}

export default HomeCreatorList