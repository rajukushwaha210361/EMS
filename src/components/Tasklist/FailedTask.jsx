import React from 'react'

const FailedTask = ({data}) => {
  return (
    
    <>
    <div className="d-flex  flex-col border m-2 p-2 bg-secondary gap-2 w-75">
                <div className="d-flex flex-col p-2 w-100 justify-content-between border-5">
                    <div className="sm:flex justify-content-between">
                        <div className="text-white">
                            <h3 >{data.category}</h3>
                        </div>
                        <div className="text-zinc-300">
                            <h5>{data.date}</h5>
                        </div>
                    </div>
                    <div>
                        <h3>{data.title}</h3>
                    </div>
                    <div>
                        <p>{data.description}</p>
                    </div>
                </div>
                <div className="d-flex justify-content-between m-2">
                    
                    <button className="btn btn-danger" >Failed</button>
                </div>
            </div>
    </>
  )
}

export default FailedTask
