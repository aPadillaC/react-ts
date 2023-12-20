import { useState } from "react"

interface User {
    uid: string,
    name: string
}



export const Usuario = () => {

    const [user, setuser] = useState<User>();


    const login = () => {
        setuser({
            uid: 'ABC123',
            name: 'Fernando Herrera'
        })
    }

  return (
    <div className="mt-5">
        <h3>Usuario</h3>

        <button
            className="btn btn-outline-primary"
            onClick={login}
        >
            Login
        </button>

        {
            (!user) ? <pre className="mt-2">No hay usuario</pre>
            :
            <pre className="mt-2">{JSON.stringify(user)}</pre>
        }

        
    </div>
  )
}
