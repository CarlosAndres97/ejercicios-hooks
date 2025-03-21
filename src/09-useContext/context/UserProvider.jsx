import { use, useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//   id:123,
//   name: 'Carlos Soriano',
//   email: 'carlos@gmail.com'
// }

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();

  return (
  //  <UserContext.Provider value={ { hola: 'Mundo', user } }>
  <UserContext.Provider value={ { user, setUser } }>
    { children }
   </UserContext.Provider>
  )
}
