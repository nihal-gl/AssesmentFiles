import TaskManager from "./TaskManager/TicketList";
import data from "./TaskManager/TicketListData";

function App(){
  return(
    <div>
    
      <TaskManager data={data}></TaskManager>
 
    </div>
  )
}
export default App;