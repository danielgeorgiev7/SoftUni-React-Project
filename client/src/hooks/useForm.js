import { useContext, useState } from "react"
import AuthContext from "../contexts/authContext";

export default function useForm(submitHandler, initialValues, preventDefault) {
    const [values, setValues] = useState(initialValues);
    const { setErrorMessage } = useContext(AuthContext);

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
        setErrorMessage("");
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
