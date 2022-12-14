import TopHeader from "../components/header/header";
import SidebarMenu from "../components/sidebar/sidebar";
import "./style/_layout.scss";

const Layout = ({content}) => {
    return(
        <div>
            <SidebarMenu />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <TopHeader />
                <div className="body flex-grow-1 px-3">
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Layout;