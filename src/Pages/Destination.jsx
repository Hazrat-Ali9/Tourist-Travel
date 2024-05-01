import { useRef, useState } from "react";
import Navbar from "../Components/Navbar";

const Destination = () => {
    const [name, setName] = useState("");
    const nameRef = useRef("");
    const [counter, setCounter] = useState(1);
    const handleForm = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
    }

    const handleName = (e) =>{
        setName(e.target.value);
    }
    console.log(name);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-center text-2xl">name on controlled state: {name}</h2>
            <h2 className="text-center text-2xl">name on uncontrolled state: {nameRef.current.value}</h2>
            <form onSubmit={handleForm} className="flex flex-col justify-center items-center mt-10">
                <input className="bg-slate-100 border-2" name="fullname" ref={nameRef}/>
                <button type="submit" className="btn">Submit</button>
            </form>
        </div>
    );
};

export default Destination;