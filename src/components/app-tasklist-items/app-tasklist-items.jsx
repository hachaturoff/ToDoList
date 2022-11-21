

 const AppTasklistItems=(props)=>{
  return (

    <li className="task">
            <input class="to__check" type="checkbox" name="nameCheck" id="check_1"></input>

            <span class="text">{props.task}</span>

            <button onClick={() => {props.deleteTodo(props.task)}}>Del</button>
    </li>

  )
}
export default AppTasklistItems;