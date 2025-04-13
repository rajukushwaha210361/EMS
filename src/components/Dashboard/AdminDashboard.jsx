import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/Alltask'
const AdminDashboard = (props) => {
    // console.log(props.role)
    return (
        <>
            <Header changeUser={props.changeUser}  role={props.role}/>
            <CreateTask changeUser={props.changeUser} />
            <Alltask changeUser={props.changeUser} />
        </>
    )
}

export default AdminDashboard
