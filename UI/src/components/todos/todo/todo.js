
import './todo.css';
import Button from '../../UI/button/button';
// import { memo } from 'react';
import { useNavigate as Navigate } from 'react-router';
import axios from 'axios';

const todo=(props)=>{
    let classes = ["todo"]
    if (props.toggler) {
        classes.push("todo-twoColumn")
    }
    let navigate = Navigate()
    const edit = ()=>{navigate("/edit-todo/"+props.id)}
    const deleted = ()=>{
        axios.delete('http://127.0.0.1:3001/api/'+props.id).then(Response => {
            console.log(Response)
        }).catch(error=>{
            console.log(error)
        }).then(navigate("/"))
    }
    return(
        <div className={classes.join(" ")} >
            <label className='todoNumber'>فعالیت : {props.id}</label>
            <span className='formItemCountainer'>
                <label>عنوان</label>
                <input type='text' value={props.todoTitle} onChange={props.titleChange}></input>
            </span>
            
            <span className='formItemCountainer'>
                <label>ساعت شروع</label>
                <input type='text' value={props.todoStart} onChange={props.startChange}></input>
            </span>
            
            <span className='formItemCountainer'>
                <label>زمان مورد نیاز</label>
                <input type='text' value={props.todoTime} onChange={props.timeChange}></input>
            </span>
            
            <span className='formItemCountainer'>
                <label>توضیح</label>
                <input type='text' value={props.todoPr} onChange={props.prChange}></input>
            </span>
            

            <Button className="todoButton" btnType="success" clicked={edit}>ویرایش</Button>
            <Button className="todoButton" btnType="danger" clicked={deleted}>حذف</Button>
        </div>
    );
}

export default todo;