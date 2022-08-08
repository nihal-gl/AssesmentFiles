import React from "react";
class OpenTickets extends React.Component{
    constructor(props){
        super(props)
        this.state={
            pri:true
        }
    }

    //Check Priority
    componentDidMount(){
        if(this.props.priority===1){
            this.setState({pri:true})
        }
        if(this.props.priority===2){
            this.setState({pri:false})
        }
    }
    
    render(){
        const {completedTask,changeCompletion}=this.props
        const{pri} = this.state
        return(
            <div>
                <h4 className="cthead">Open Tickets</h4>
                {
                    completedTask.map((item)=>(
                        <div className="CompletedTask">
                            <div className="card">
                            <div className = {pri?'p1':'p2'}>
                            <h5 className="card-header">{item.title}</h5>
                            <div className="card-body">
                                <p>Priority : {item.priority}</p>
                                <p>Description : {item.des}</p>
                                <button  className='btn btn-primary' onClick={()=>changeCompletion(item.id)}>Close this ticket</button>
                            </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        )
    }
}
export default OpenTickets