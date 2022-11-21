import AppTasklistItems from "../app-tasklist-items/app-tasklist-items"; 


const AppTaskList = (props) => {

   let tasks = props.list.map(task => <AppTasklistItems deleteTodo={props.deleteTodo} task={task}/>)

  return (
    <ul className='tasklist'>
        {tasks}
    </ul>
  )
}

export default AppTaskList ;