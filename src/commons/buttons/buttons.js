import { CButton } from "@coreui/react";
import { vars } from "./style/buttonStyles";
import './style/button.css';

const ButtonPrimary = ({onClick, color, isDisabled=false, label, type="button"}) => {
    return(
        <>
            <CButton 
                className="button"
                color={color} 
                shape="rounded-0" 
                size="sm" 
                style={vars}
                onClick={onClick}
                disabled={isDisabled}
                type={type}
            >
                {label}
            </CButton>
        </>
    )
}
export default ButtonPrimary;