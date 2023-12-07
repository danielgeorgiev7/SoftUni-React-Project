import { useContext, useState } from "react"
import AuthContext from "../contexts/authContext";
import formatUsername from "../utils/formatUsername";

export default function useForm(submitHandler, asyncSubmitBool, initialValues) {
    const [values, setValues] = useState(initialValues);
    const { setErrorMessage } = useContext(AuthContext);

    const onChange = (e) => {
        if (e.target.name === "username") {
            e.target.value = formatUsername(e.target.value)
            if (e.target.value === "@") e.target.value = "";
            else if (e.target.value.substring(0, 1) !== "@" && e.target.value !== "") {
                e.target.value = "@" + e.target.value;
            }
        }
        else {
            setValues(state => ({
                ...state,
                [e.target.name]: e.target.value
            }));
        }
        setErrorMessage("");
    };

    const onSubmitAsync = async () => {
        const result = await submitHandler(values);
        setValues(initialValues);
        return result;
    };

    const onSubmit = () => {
        submitHandler(values);
        setValues(initialValues);
    };

    return {
        values,
        onChange,
        onSubmit: asyncSubmitBool ? onSubmitAsync : onSubmit,
    }
}
