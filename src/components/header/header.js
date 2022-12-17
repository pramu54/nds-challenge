import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CHeader, CHeaderToggler } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../helper/windowSize";
import "./style/header.css";

const TopHeader = () => {
    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    const { width } = useWindowDimensions();

    return(
        <>
            <CHeader position="sticky" className="mb-4">
                <CContainer fluid>
                    <CHeaderToggler
                        className={
                            width > 1024 
                            ? "ps-1 toggler"
                            : "ps-1 toggler-hide"
                        }
                        onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
                    >
                        <CIcon icon={cilMenu} size="lg" />
                    </CHeaderToggler>
                </CContainer>
            </CHeader>
        </>
    )
}
export default TopHeader;