import { cilHome, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";
import { useDispatch, useSelector } from "react-redux";
import "./style/sidebar.css";

const SidebarMenu = () => {

    const dispatch = useDispatch()
    const sidebarShow = useSelector((state) => state.sidebarShow)
    const sidebarNarrowed = useSelector((state) => state.sidebarNarrowed)

    return(
        <>
            <CSidebar 
                position="fixed" 
                narrow={sidebarNarrowed}
                visible={sidebarShow}
                onVisibleChange={(visible) => {
                    dispatch({type: 'set', sidebarShow: visible})
                }}
            >
                {sidebarNarrowed === false 
                    ? 
                        <CSidebarBrand>NDS Challenge</CSidebarBrand>
                    :
                        <CSidebarBrand>NDS</CSidebarBrand>
                }
                
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
                <CSidebarToggler onClick={() => dispatch({ type: 'set', sidebarNarrowed: !sidebarNarrowed })}/>
            </CSidebar>
        </>
    )
}
export default SidebarMenu;