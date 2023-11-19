import React, { useEffect, useState } from "react"

const ErrorAsyncAwait = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  const fetchData = async () => {
    setError("")
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/404")
      if (!response.ok) {
        
        throw new Error("Sorry something went wrong")
      }
      const data = await response.json()
      setUsers(data)
    } catch (error) {
      
      setError(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      {error && <p>{error}</p>}
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

export default ErrorAsyncAwait
