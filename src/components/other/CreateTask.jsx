import React, { useContext } from 'react'
import Header from './Header'
import { useState } from 'react'
import NewTask from '../Tasklist/NewTask'
import { AuthContext } from '../../Context/AuthProvider'
import { setLocalstroage } from '../../utils/LocalStorage'
const CreateTask = () => {
    // localStorage.clear()
 const [userData,setuserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, settaskDescription] = useState('')
    const [taskdate, setTaskdate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('')
    const [newTask, setNewTask] = useState({});

    const submitHandler = (e) => {
        e.preventDefault();
        const taskObj = {
            title: taskTitle,
            description: taskDescription,
            date: taskdate,
            category: category,
            assignTo: assignTo,
            active: false,
            newTask: true,
            failed: false,
            complate: false
        };
        const data = [...userData];
        data.forEach(function(e) {
            if(assignTo==e.first_name){
                e.tasks.push(taskObj)
                e.taskCounts.newTask=e.taskCounts.newTask+1
            }
            
        });
        setuserData(data)
        console.log(data)
        localStorage.setItem('userData', JSON.stringify(data)); 
        setLocalstroage();
        setAssignTo('')
        setCategory('');
        setTaskdate('');
        setTaskTitle('');
        settaskDescription('')
    }
    return (
        <>
            <div className="d-flex flex-col justify-content-center align-items-center ">
                <div>
                    <h1>Admin Panel</h1>
                </div>
                <div className="mainadmin bg-secondary overflow-auto text-white d-flex flex-col border-dark rounded-4 p-2 border-2 w-75">

                    <div className="d-flex gap-2 m-3">
                        <div>
                            <button className="bg-secondary border text-white p-1 rounded-circle" disabled>&#43;</button>
                        </div>
                        <div className="bg-white text-black px-3 rounded-3">
                            <h3>Create Task</h3>
                        </div>
                    </div>
                    <div>
                        <form className="d-flex flex-col gap-2 pb-5 p-2" onSubmit={(e) => {
                            submitHandler(e);
                        }}>
                            <div>
                                <label className="form-lable fs-4">Task title</label>
                                <input type="text" required className="form-control" placeholder='Task title'
                                    value={taskTitle} onChange={(e) => {
                                        setTaskTitle(e.target.value)
                                    }} />
                            </div>
                            <div>
                                <label className="form-lable fs-4">Description</label>
                                <textarea cols="30" rows="3" className="form-control border-5" placeholder='Description'  value={taskDescription} onChange={(e) => {
                                        settaskDescription(e.target.value)
                                    }}></textarea>
                               
                            </div>
                            <div>
                                <label className="form-lable fs-4">Date</label>
                                <input type="date" required className="form-control" placeholder='Date'  value={taskdate} onChange={(e) => {
                                        setTaskdate(e.target.value)
                                    }}/>
                            </div>
                            <div>
                                <label className="form-lable fs-4">Assign To</label>
                                <input type="text" required className="form-control" placeholder='Assign To The...'  value={assignTo} onChange={(e) => {
                                        setAssignTo(e.target.value)
                                    }}/>
                            </div>
                            <div>
                                <label className="form-lable fs-4">Category</label>
                                <input type="text" required className="form-control" placeholder='Category' value={category} onChange={(e) => {
                                        setCategory(e.target.value)
                                    }} />
                            </div>
                            <button className="btn mt-2 btn-success">Create</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateTask
