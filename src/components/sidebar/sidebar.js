import { cilHome, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";
import { useState } from "react";
import "./style/sidebar.css";

const SidebarMenu = () => {
    const [isNarrowed, setIsNarrowed] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    const onNarrow = () => {
        setIsNarrowed(!isNarrowed);
        setIsVisible(!isVisible);
    }

    return(
        <>
            <CSidebar position="fixed" narrow={isNarrowed}>
                <CSidebarBrand className={ isNarrowed === false ? "shown" : "hidden"}>NDS Challenge</CSidebarBrand>
                <CSidebarNav>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilHome} />
                            Dashboard
                        </CNavItem>
                    <CNavTitle>Master</CNavTitle>
                        <CNavItem href="#">
                            <CIcon customClassName="nav-icon" icon={cilUser} />
                            Employee
                        </CNavItem>
                </CSidebarNav>
                <CSidebarToggler onClick={onNarrow}/>
            </CSidebar>
        </>
    )
}
export default SidebarMenu;