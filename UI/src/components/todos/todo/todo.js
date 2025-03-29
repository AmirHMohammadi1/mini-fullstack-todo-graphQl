
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
            <p className='todoNumber'>فعالیت : {props.id}</p>
            <span className='formItemCountainer'>
                <p>عنوان</p>
                {/* <input type='text' value={props.todoTitle} onChange={props.titleChange}></input> */}
                <h4>{props.todoTitle}</h4>
            </span>
            
            <span className='formItemCountainer'>
                <p>ساعت شروع</p>
                {/* <input type='text' value={props.todoStart} onChange={props.startChange}></input> */}
                <h4>{props.todoStart}</h4>
            </span>
            
            <span className='formItemCountainer'>
                <p>زمان مورد نیاز</p>
                {/* <input type='text' value={props.todoTime} onChange={props.timeChange}></input> */}
                <h4>{props.todoTime}</h4>
            </span>
            
            <span className='formItemCountainer'>
                <p>توضیح</p>
                {/* <input type='text' value={props.todoPr} onChange={props.prChange}></input> */}
                <h4>{props.todoPr}</h4>
            </span>
            

            <Button className="todoButton" btnType="success" clicked={edit}>ویرایش</Button>
            <Button className="todoButton" btnType="danger" clicked={deleted}>حذف</Button>
        </div>
    );
}

export default todo;