import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthProvider'
const Alltask = () => {
    const [userData,setuserData] = useContext(AuthContext);
    // console.log(data)
    return (
        <>
            <div className="">
                <div className="d-flex flex-col  rounded-4 mt-5 bg-secondary h-50 rounded-5 overflow-auto w-100 h-75">
                    <div className="d-flex mt-4 justify-content-center bg-white m-2">
                        <h1>Task list</h1>
                    </div>
                   
                    <div className="overflow-auto">
                        {userData.map(function (e,idx) {
                            return <div key={idx} className="d-flex m-2 rounded-4 justify-content-between border-4 flex-wrap flex-md-nowrap">
                                <div className="bg-white rounded-4 p-1 m-2 px-3"><h5>Name-{e.first_name}</h5></div>
                                <div className="bg-warning py-1 rounded-4 m-2 px-3"><h5>New tasks-{e.taskCounts.newTask}</h5></div>
                                <div className="bg-slate-400 py-1 rounded-4 m-2 px-3"><h5>Active Tasks-{e.taskCounts.active}</h5></div>
                                <div className="bg-success py-1 rounded-4 m-2 px-3"><h5>Completed-{e.taskCounts.complete}</h5></div>
                                <div className="bg-danger py-1 rounded-4 m-2 px-3"><h5>failed-{e.taskCounts.failed}</h5></div>
                            </div>
                    })}
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Alltask
