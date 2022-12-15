import { useSelector } from "react-redux";
import TopHeader from "../components/header/header";
import SidebarMenu from "../components/sidebar/sidebar";
import "./style/layout.css";

const Layout = ({content}) => {
    const sidebarShow = useSelector((state) => state.sidebarShow)
    const sidebarNarrowed = useSelector((state) => state.sidebarNarrowed)

    return(
        <div>
            <SidebarMenu />
            <div className={
                sidebarShow === true ?
                    sidebarNarrowed === true 
                    ? "wrapper-narrow d-flex flex-column min-vh-100 bg-light" 
                    : "wrapper d-flex flex-column min-vh-100 bg-light"
                : "wrapper-hidden d-flex flex-column min-vh-100 bg-light"
                }
                
            >
                <TopHeader />
                <div className="body flex-grow-1 px-3">
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Layout;