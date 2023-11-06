import { useState } from 'react'
import Input from './input'

function Info() {
    const [submitted,  setSubmitted] = useState(false);
    console.log(submitted);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(submitted);
        setSubmitted(!submitted);
    }

    return (
        <form className="info">
            <Input descriptor="name" isSubmitted={submitted}></Input>
            <Input descriptor="email" isSubmitted={submitted}></Input>
            <Input descriptor="number" isSubmitted={submitted}></Input>
            <button onClick={handleSubmit}>{submitted ? 'Edit' : 'Submit'}</button>
        </form>    
    )
}

export default Info