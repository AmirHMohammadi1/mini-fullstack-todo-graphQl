interface testProps {
    name : string,
    age : number
}
 
const test = (props:testProps) => {
    const {name, age} = props;
    return (
        <h1>hello {name} your age is {age}</h1>
    );
}
 
export default test;