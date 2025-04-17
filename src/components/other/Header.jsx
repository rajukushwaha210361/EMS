import React from 'react'

const Header = (props) => {
    // console.log(props.data.role)
    const userLogOut = () => {
        localStorage.setItem('loggedInUser', '')
        props.changeUser('')
    }
    console.log(props.changeUser)
    // console.log(props.data.password)
console.log(props.role)
    return (
        <>
            <div className="d-flex justify-content-between align-items-start align-content-start w-100 bg-secondary">
                <div className="p-3">
                    <h3>Hii{'\u{1F44B}'} {props.role=='employee'?props.data.first_name:"Raju"}</h3>
                </div>
                <div className="p-3">
                    <button onClick={userLogOut} className="btn btn-danger ms-auto">Logout</button>
                </div>
            </div>
        </>
    )
}

export default Header
