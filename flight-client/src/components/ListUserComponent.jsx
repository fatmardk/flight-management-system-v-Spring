import { useEffect,useState } from "react"
import { listAllUser } from "../services/UserService"

const ListUserComponent = () => {

  const [user, setUser] = useState([])

  useEffect(()=>{
    listAllUser().then((response) => {
      setUser(response.data);
    }).catch(error => {
      console.log(error);
      
    })
  },[])
  return (
    <div>
      <h2>List User</h2>
      <table>
        <thead>
          <tr>
            <th>User Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {user.map(user => 
          <tr key={user.id}>
            <td>{user.userId}</td>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListUserComponent