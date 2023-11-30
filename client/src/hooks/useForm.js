import { useState } from "react"

export default function useForm(submitHandler, initialValues, preventDefault) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        if (preventDefault) e.preventDefault();
        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    }
}
