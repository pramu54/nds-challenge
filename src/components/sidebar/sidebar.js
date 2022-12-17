import { cilHome, cilUser } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CNavItem, CNavTitle, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from "@coreui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useWindowDimensions from "../../helper/windowSize";
import "./style/sidebar.css";

const SidebarMenu = ({className}) => {
    const dispatch = useDispatch();
    const sidebarShow = useSelector((state) => state.sidebarShow);
    const sidebarNarrowed = useSelector((state) => state.sidebarNarrowed);
    const { width } = useWindowDimensions();

    useEffect(()=>{
        if(width<1024){
            dispatch({type: 'set', sidebarShow: false})
        } else {
            dispatch({type: 'set', sidebarShow: true})
        }
    }, [width])

    return(
        <>
            <CSidebar 
                className={className}
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
                        <CNavItem href="/home/employees">
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