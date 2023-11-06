import { useState } from "react";
import Input from "./Input";

function Education() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(submitted);
        setSubmitted(!submitted);
    }

    return (
        <form className="education">
            <Input descriptor="university" isSubmitted={submitted}></Input>
            <Input descriptor="major" isSubmitted={submitted}></Input>
            <Input descriptor="location" isSubmitted={submitted}></Input>
            <Input descriptor="start" isSubmitted={submitted}></Input>
            <Input descriptor="graduation" isSubmitted={submitted}></Input>
            <button onClick={handleSubmit}>{submitted ? 'Edit' : 'Submit'}</button>
        </form>
    )
}

export default Education