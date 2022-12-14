import { CButton } from "@coreui/react";
import { vars } from "./style/buttonStyles";

const ButtonPrimary = ({onClick, color, isDisabled=false}) => {
    return(
        <>
            <CButton 
                color={color} 
                shape="rounded-0" 
                size="sm" 
                style={vars}
                onClick={onClick}
                disabled={isDisabled}
            >
                Update
            </CButton>
        </>
    )
}
export default ButtonPrimary;