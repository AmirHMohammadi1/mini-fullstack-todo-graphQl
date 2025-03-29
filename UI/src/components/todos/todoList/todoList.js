import './todoList.css'
import Button from '../../UI/button/button'
// import {memo} from 'react';
import { useNavigate as Navigate } from 'react-router';
import axios from 'axios';


const todoList= (props)=>{
    let navigate = Navigate()
    const edit = ()=>{navigate("/edit-todo/"+props.id)}
    const deleted = ()=>{
        axios.delete('http://127.0.0.1:3001/api/'+props.id).then(Response => {
            console.log(Response)
        }).catch(error=>{
            console.log(error)
        }).then(navigate("/"))
    }
    return (
        <div className='ItemsList'>
            <label>{props.id} : </label>
            <h4 className='todo-list-label'>{props.todoTitle}</h4>
            {/* <input type='text' value={props.todoTitle} disabled></input> */}
            {/* <Link to={"/edit-todo/"+props.id}>
                <Button className="listBtn" btnType="success" >و</Button>
            </Link> */}
            {/* ? برای استفاده از کامپوننت دکمه ای که تعریف کردیم و عملکرد کلیک باید پاس داده شود ، 
            در این حالت نمیتوان از کلیک استفاده کرد */}
            <Button className="listBtn" btnType="success" clicked={edit}>و</Button>
            <Button className="listBtn" btnType="danger" clicked={deleted}>ح</Button>
        </div>
        
    )
}

export default todoList