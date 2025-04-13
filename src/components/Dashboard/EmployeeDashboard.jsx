import React from 'react'
import "./empdash.css"
import Header from '../other/Header'
import TaskList from '../Tasklist/TaskList'
const EmployeeDashboard = ( props ) => {
    // console.log(props.role)
    return (
        <>
            <Header changeUser={props.changeUser} data={props.data}  role={props.role}/>
            {/* <div>{props.data.id}</div> */}
            <div className="d-flex flex-col m-5 align-items-center vh-100 wh-100">
                {/* <h1 className="text-center">Employee panal</h1> */}
                <div className="mainempdassh d-flex flex-col border border-success w-100 bg-slate-400 p-3 vh-100">
                    <div className="d-flex gap-2 w-100 justify-content-start text-center flex-wrap m-4">
                        <div className="border bg-light p-3  w-25">
                            <span>{props.data.taskCounts.newTask}</span>
                            <br /> <span>New work</span>
                        </div>
                        <div className="border bg-success p-3 w-25">
                            <span>{props.data.taskCounts.complete}</span>
                            <br /><span>Completed</span>
                        </div>
                        <div className="border bg-success p-3  w-25">
                            <span>{props.data.taskCounts.active}</span>
                            <br /><span>Accepted Task</span>
                        </div>
                        <div className="border bg-danger p-3  w-25">
                            <span>{props.data.taskCounts.failed}</span>
                            <br /><span>Failed</span>
                        </div>
                        <div className="border bg-success p-3  w-25">
                            <span>{props.data.taskCounts.total}</span>
                            <br /><span>Total task</span>
                        </div>
                    </div>
                </div>
                <TaskList data={props.data} />

            </div>
        </>
    )
}
export default EmployeeDashboard
