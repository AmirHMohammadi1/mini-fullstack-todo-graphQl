import { userProps } from "./types";
 
const user = ({usersinfo}:userProps) => {
    return (
        <div>
            {usersinfo.map((user:userProps,index:number)=>{
                return(
                    <p key={index}>{user.id} {user.name} {user.user}</p>
                )
            })}
        </div>
    );
}
 
export default user;