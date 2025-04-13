import React from 'react'

const AcceptTask = ({data}) => {

    return (
        <>
            <div className="d-flex flex-col border m-2 p-2 bg-secondary gap-2 w-75">
                <div className="d-flex flex-col p-2  justify-content-between border-5">
                    <div className="d-flex justify-content-between">
                        <div className="text-white">
                            <h3 >{data.category}</h3>
                        </div>
                        <div className="text-info">
                            <h5>{data.date}</h5>
                        </div>
                    </div>
                    <div>
                    <h3> <p>{data.title}</p></h3>
                    </div>
                    <div>
                       {data.description}
                    </div>
                </div>
                <div className="d-flex justify-content-between m-2 gap-2">
                    <button className="btn p-1 btn-success" >Marks as Complete</button>
                    <button className="btn p-1 btn-danger">Marks as failed</button>
                </div>
            </div>
            </>
            )
}

 export default AcceptTask
