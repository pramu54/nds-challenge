import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import EmployeesForm from "../pages/addEmployees/employeesForm";
import ListEmployees from "../pages/listEmployees/listEmployees";

const WebRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home/employees" />}/>
                <Route path="/home/employees" element={<Layout content={<ListEmployees />} />} />
                <Route path="/home/employees/add" element={<Layout content={<EmployeesForm />} />} />
                <Route path="/home/employees/update/:id" element={<Layout content={<EmployeesForm />} />} />
                {/* <Route path="*" element={<ErrorPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}
export default WebRoute;