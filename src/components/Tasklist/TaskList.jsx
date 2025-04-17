import React from 'react'
import AcceptTask from './AcceptedTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    // console.log(data)
    return (
        <>
            <div className="d-flex flex-column align-items-center border m-2 p-1 gap-2  w-100 rounded-4 ">
                {/* <AcceptTask />
                <NewTask />
                <CompleteTask />
                <FailedTask /> */}
                {data.tasks.map((e,idx)=>{
                    if(e.active){
                        return <AcceptTask key={idx} data={e}/>
                    }
                    if(e.newTask){
                        return  <NewTask key={idx} data={e}/>
                    }
                    if(e.complete){
                        return <CompleteTask key={idx} data={e}/>
                    }
                    if(e.failed){
                        return <FailedTask key={idx} data={e}/>
                    }
                })}
                 
            </div>

        </>
    )
}

export default TaskList
