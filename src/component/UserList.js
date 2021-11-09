import React from 'react'
import Users from './Users.js'

const UserList = (props) => {
    return (
        <div>
            heloo users : 
            {props.users.map(el=><Users users={el}/>)

            }
        </div>
    )
}

export default UserList
