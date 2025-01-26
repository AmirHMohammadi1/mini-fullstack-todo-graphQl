import { Fragment } from "react";
import { useParams, Navigate } from "react-router";
import EditTodo from "../components/todos/editTodo/editTodo";
import { useState , useEffect } from 'react';
import axios from 'axios';

const EditPage = ()=>{
    const params = useParams()
    // console.log(params.id)
    let shoudeRedirect = false
    if (params.id) {
        shoudeRedirect = true
    }
    
    const[todostate,setTodostate]=useState([])
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get('http://127.0.0.1:3001/api/' + params.id).then(
            Response =>
                setTodostate(Response.data),
                // console.log(Response),
                setLoading(false)
        )
    },[params.id])
    // console.log(todostate)

    return (
        <Fragment>
            {shoudeRedirect ? null : <Navigate replace to='/' state={{redirected:'true'}}/>}
            
            {
                loading ? <h1>...loading</h1> : 
                    todostate.map((todo , index)=>
                    <EditTodo key={index}
                        todostate={todo}
                        id={params.id}
                    />
                    )
                    // <EditTodo key={index}
                    //     params={params}
                    //     todostate={todostate}
                    // />
            }
            
        </Fragment>
        
    )
}

export default EditPage;