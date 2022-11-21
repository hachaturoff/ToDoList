

function AppTaskbar (props) {


        return (
           <div>
               <div className='taskbar'>
                   <form onSubmit={(e) => {
                       props.addTodo(e)
                   }}>
                       <input onChange={(e => {props.setTodo(e.target.value)})} value={props.todo} name="todo" type="text" placeholder="New Task..."/>
                       <button type="submit"> ADD</button>
                   </form>
               </div>

           </div>
        )

}

export default AppTaskbar;