import './editTodo.css';
import Button from '../../UI/button/button';
import { useState } from 'react';
import axios from 'axios';


const EditTodo=(props)=>{
    // console.log(props.todostate.todoTitle)

    const[FtodoTitle,setFtodoTitle]=useState(props.todostate.todoTitle)
    const[FtodoStart,setFtodoStart]=useState(props.todostate.todoStart)
    const[FtodoTime,setFtodoTime]=useState(props.todostate.todoTime)
    const[FtodoPr,setFtodoPr]=useState(props.todostate.todoPr)
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
        // console.log(data)
        axios.put('http://127.0.0.1:3001/api/' + props.id, data).then(Response=>{
            console.log(Response)
        })
        alert('ویرایش شد.');
        // console.log(data)
    }

    return(
        <div className='edittodo edittodo-twoColumn' >
            <h2>ویرایش فعالیت</h2>
            {/* <label>شماره دانش آموزی : </label> */}
            <label>عنوان</label>
            <input type='text' value={FtodoTitle} onChange={HandleFtodoTitle}></input>

            <label>ساعت شروع</label>
            <input type='text' value={FtodoStart} onChange={HandleFtodoStart}></input>

            <label>زمان مورد نیاز</label>
            <input type='text' id='phone' value={FtodoTime} onChange={HandleFtodoTime}></input>

            <label>توضیحات</label>
            <input type='text' value={FtodoPr} onChange={HandleFtodoPr}></input>

            <Button btnType="success" clicked={addtodo}>ثبت تغییرات</Button>
        </div>
    );
}

export default EditTodo;