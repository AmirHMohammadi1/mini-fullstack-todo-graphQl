import { usersProps } from "./types";
import User from "./user";

const Users = () => {

    const Users : usersProps[] = [
        {id : 1 , name : 'amir' , user : 'admin1'},
        {id : 2 , name : 'setareh' , user : 'admin2'},
        {id : 3 , name : 'nafas' , user : 'user'}
    ]

    return (
        <User usersinfo={Users}/>
    );
}
 
export default Users;