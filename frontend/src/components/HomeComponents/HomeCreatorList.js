import React from 'react'
import {useState, useEffect} from 'react'
import HomeCreatorCard from "./HomeCreatorCard"
import "../CSS/creatorCard.css"

function HomeCreatorList({ handleCreatorNameChange }) {

    const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
  }, []);

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const selectedUsers = shuffle(users);

  return (
    <div>
        {selectedUsers.map((user, index) => {
            if (index >= 3) {
                return;
                }
        return <HomeCreatorCard className="home_creator_card" key={user.username} user={user} handleCreatorNameChange={handleCreatorNameChange} />
    })}
    </div>
  )
}

export default HomeCreatorList