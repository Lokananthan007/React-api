import axios from "axios"
import React, { useEffect, useState } from "react"

const UsingAxios = () => {
  const [users, setUsers] = useState([])

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      setUsers(response.data)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default UsingAxios
