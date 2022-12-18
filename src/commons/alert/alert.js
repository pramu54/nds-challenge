import { CAlert } from "@coreui/react";

const AlertSolid = ({color, visible, label}) => {
    return(
        <>
            <CAlert color={color} variant="solid" visible={visible}>{label}</CAlert>
        </>
    )
}
export default AlertSolid;