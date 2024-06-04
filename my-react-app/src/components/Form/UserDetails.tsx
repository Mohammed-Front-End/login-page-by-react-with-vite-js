import { IUserData } from "../../Interfaces/DataRigister";


interface iProps {
  user: IUserData
}

function UserDetails({user}: iProps) {
  return (
    <div>
      <h3>Name: {user.userName}</h3>
      <h3>Email: {user.userEmail}</h3>
      <h3>Phone: {user.userPhone}</h3>
    </div>
  )
}

export default UserDetails