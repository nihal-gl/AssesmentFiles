import React from "react"
import OpenTickets from "./OpenTickets"
import ClosedTickets from "./ClosedTickets"
class TicketList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            sdata:[],
            tasks:this.props.data
        }
    }
    
    //sort data 
    /*componentDidMount(){
        const sorteddata=[...this.props.data.list].sort((a,b)=>Number(a.priority)-Number(b.priority))
       this.setState({sdata:sorteddata})
     }*/
    //open ticket
    getOpenTickets=()=>{
       const result= this.state.tasks.filter((item)=>item.openstatus===true)
       return result
    }
    //closed tickets
    getClosedTickets=()=>{
        const result= this.state.tasks.filter((item)=>item.openstatus===false)
        return result
     }
     changeCompletionStatus=(itemid)=>{
        const temp=[...this.state.tasks]
        const obj=temp.find((item)=>item.id===itemid)
        obj.openstatus=!obj.openstatus
        obj.closesummary = "THIS TICKET HAS BEEN CLOSED"
        this.setState({tasks:temp}) 
     }
  
    
    render(){
        return(
            <div>
                <h1>JIRA<span className="spancol">clone</span></h1>
                <hr></hr>
                <div className="row">
                    <div className="col-md-6">
                    <OpenTickets completedTask={this.getOpenTickets()} changeCompletion={this.changeCompletionStatus}></OpenTickets>
                    </div>
                    <div className="col-md-6">
                    <ClosedTickets pendingTask={this.getClosedTickets()}></ClosedTickets>
                    </div>
                </div>
            </div>
        )
    }
}
export default TicketList