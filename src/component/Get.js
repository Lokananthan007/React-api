import { Button, EditableText } from "@blueprintjs/core"
import { useEffect, useState } from "react"

function Get() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => setUsers(json))
  }, [])

  return (
    <div className="App">
      <table class="bp4-html-table .modifier">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <EditableText value={user.email} />
              </td>
              <td>
                <EditableText value={user.website} />
              </td>
              <td>
                <Button intent="primary">Update</Button>
                &nbsp;
                <Button intent="danger">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Get;