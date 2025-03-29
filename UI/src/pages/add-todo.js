import {useState} from 'react';
import Newtodo from '../components/todos/newTodo/newTodo';
import axios from 'axios';

const AddTodo = ()=>{

    const[FtodoTitle,setFtodoTitle]=useState('')
    const[FtodoStart,setFtodoStart]=useState('')
    const[FtodoTime,setFtodoTime]=useState('')
    const[FtodoPr,setFtodoPr]=useState('')
    const HandleFtodoTitle=(event)=>{
        setFtodoTitle(event.target.value)
    }
    const HandleFtodoStart=(event)=>{
        setFtodoStart(event.target.value)
    }
    const HandleFtodoTime=(event)=>{
        setFtodoTime(event.target.value)
    }
    const HandleFtodoPr=(event)=>{
        setFtodoPr(event.target.value)
    }
    const addtodo=()=>{
        const data = {
            'todoTitle':FtodoTitle,
            'todoStart':FtodoStart,
            'todoTime':FtodoTime,
            'todoPr':FtodoPr
        }
        axios.post('http://127.0.0.1:3001/api', data).then(Response=>{
            console.log(Response)
        })
        setFtodoTitle('')
        setFtodoStart('')
        setFtodoTime('')
        setFtodoPr('')
        // alert('اضافه شد.');
        console.log(data)
    }

    return(
        <Newtodo
            todoTitle={FtodoTitle}
            todoStart={FtodoStart}
            todoTime={FtodoTime}
            todoPr={FtodoPr}
            HtodoTitle={HandleFtodoTitle}
            HtodoStart={HandleFtodoStart}
            HtodoTime={HandleFtodoTime}
            HtodoPr={HandleFtodoPr}
            addtodo={addtodo}
        />

    )
}

export default AddTodo;