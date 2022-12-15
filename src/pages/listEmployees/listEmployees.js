import { CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import ButtonPrimary from "../../commons/buttons/buttons";
import MainTable from "../../commons/table/table";
import "./style/listEmployees.css";

const headCells = [
    {
        id: 'nik',
        label: 'NIK'
    },
    {
        id: 'fullname',
        label: 'Fullname'
    },
    {
        id: 'joinDate',
        label: 'Join Date'
    },
    {
        id: 'salary',
        label: 'Salary'
    },
    {
        id: 'action',
        label: 'Action'
    }
]

const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);

    const getData = async() => {
        await axios
        .get(`/employee`)
        .then((res) => {
            const { data } = res;
            setEmployees(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    useEffect(()=>{
        getData();
    }, [])

    const current = new Date();

    return(
        <div className="employees">
            <MainTable 
                header={headCells}
                data={
                    employees.map((employee)=>(
                        <CTableRow key={employee.nik}>
                            <CTableHeaderCell scope="row">{employee.nik}</CTableHeaderCell>
                            <CTableDataCell>{employee.name}</CTableDataCell>
                            <CTableDataCell>
                                {`${moment(employee.join_date).format('DD/MM/YYYY')} (${moment(current).diff(moment(employee.join_date), 'years')} Years )
                                `}
                            </CTableDataCell>
                            <CTableDataCell>{`$ ${employee.salary}`}</CTableDataCell>
                            <CTableDataCell>
                                <ButtonPrimary color="info"/>
                                <ButtonPrimary color="danger"/>
                            </CTableDataCell>
                        </CTableRow>
                    ))
                }
            />
            {console.log(current)}
        </div>
    )
}
export default ListEmployees;