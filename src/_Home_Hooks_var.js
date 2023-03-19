import { useState } from "react";

const Home = () => {
    //non reactive var
    // let name = 'mario';

    //hook useState
    const [name, setName] = useState('mario');
    const [age, setAge] = useState(25)

    const handleClick = (e) => {
        console.log('hello, ninjas', e)
    }

    const handleClickAgain = (name, e) =>{
        console.log('hello ' + name, e);
    }

    const changeName = () => {
        //non reactive var
        // name = 'luigi'
        setName('luigi')
        setAge(46)
    }


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick = {changeName}>Click me</button>
            {/* <button onClick = {(e) => handleClickAgain('mario',e)}>Click me Again</button> */}
        </div>
    );
}
 