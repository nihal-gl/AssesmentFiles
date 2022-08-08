import React from "react";
class ClosedTickets extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
       
        const borderstyle={
            borderStyle:'double',
            backgroundColor:'#e04c60'
        }
        const {pendingTask,changeCompletion}=this.props
        return(
            <div>
                <h4 className="pthead">Closed Tickets</h4>
                {
                    pendingTask.map((item)=>(
                        <div className="card">
                            <div className="card-header">
                                <h5>{item.title}</h5>
                            </div>
                            <div className="card-body">
                                <p>Priority: {item.priority}</p>
                                <p>Description: {item.des}</p>
                                {/*<button className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>Close Ticket</button>*/}
                                <p className="cmsg">Closing message : {item.closesummary}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default ClosedTickets