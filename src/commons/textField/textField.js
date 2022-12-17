import { CFormInput } from "@coreui/react";
import { invalid } from "moment";

const TextField = ({
        type="text", 
        placeholder, 
        defaultValue, 
        disabled, 
        onChange, 
        value,
        feedbackInvalid,
        invalid=false,
        text
    }) => {
    return(
        <>
            <CFormInput 
                type={type}
                id="validationDefault01"
                placeholder={placeholder}
                defaultValue={defaultValue}
                required
                disabled={disabled}
                onChange={onChange}
                value={value}
                feedbackInvalid={feedbackInvalid}
                invalid={invalid}
                text={text}
            />
        </>
    )
}
export default TextField;