// import React, { useEffect, useState } from "react"

// const ErrorThen = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = () => {
//     fetch("https://jsonplaceholder.typicode.com/404")
//       .then(response => {
//         return response.json()
//       })
//       .then(data => {
//         setUsers(data)
//       })
//   }

//   useEffect(() => {
//     fetchData()
//   }, [])

//   return (
//     <div>
//       {users.length > 0 && (
//         <ul>
//           {users.map(user => (
//             <li key={user.name}>{user.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   )
// }

// export default ErrorThen
import React, { useEffect, useState } from "react"

const ErrorThen = () => {
  const [users, setUsers] = useState([])
  const [error, setError] = useState("")

  const fetchData = () => {
    setError("")
    fetch("https://jsonplaceholder.typicode.com/404")
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          
          throw new Error("Sorry something went wrong")
        }
      })
      .then(data => {
        setUsers(data)
      })
      .catch(error => {
       
        setError(error.message)
      })
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

export default ErrorThen
