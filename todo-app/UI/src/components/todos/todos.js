import { memo } from 'react';
import Todo from './todo/todo';
import ErrorPage from '../error/errorPage';

const Todos=(props)=>{
    // const adad = 1
    // if (adad > 1) {
    //     console.log(adad)
    //     throw new Error('Im Sorry');
    // }
    
    
    return(
        props.todosState.map((todo,index)=>
            <ErrorPage key={index}>
            <Todo 
                id={todo.todoId}
                todoTitle={todo.todoTitle}
                todoStart={todo.todoStart}
                todoTime={todo.todoTime}
                todoPr={todo.todoPr}

                titleChange={(event)=>props.titleChangeHandler(event,todo.id)}
                startChange={(event)=>props.startChangeHandler(event,todo.id)}
                timeChange={(event)=>props.timeChangeHandler(event,todo.id)}
                prChange={(event)=>props.prChangeHandler(event,todo.id)}

                delete={()=>props.deletetodo(todo.id)}

                // toggler={props.toggler}
                toggler={props.toggle}
            />
            
            </ErrorPage>
        )
    )
}

export default memo(Todos);