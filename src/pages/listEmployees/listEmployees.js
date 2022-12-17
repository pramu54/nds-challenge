import { CFormInput, CTableDataCell, CTableHeaderCell, CTableRow } from "@coreui/react";
import axios from "axios";
import moment from "moment/moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
    const navigate = useNavigate();
    const [employees, setEmployees] = useState([]);
    const [newEmployees, setNewEmployees] = useState([]);
    const [nikSearch, setNikSearch] = useState("");
    const [fullnameSearch, setFullnameSearch] = useState("");

    const getData = () => {
        axios
        .get(`/employee`)
        .then((res) => {
            const { data } = res;
            setEmployees(data);
            setNewEmployees(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    const onDelete = (id) => {
        axios
        .delete(`/employee/${id}`)
        .then((res) => {
            const { data } = res;
            console.log(data);
            getData();
        })
        .catch((err) => {
            console.log(err.response);
        });
    }

    useEffect(()=>{
        getData();
    }, [])

    const handleNikSearch = (e) => {
        const value = e.target.value;

        setNikSearch(value);
    };

    const handleFullnameSearch = (e) => {
        const value = e.target.value;

        setFullnameSearch(value);
    };

    const handleSearch = () => {
        setNewEmployees(employees.filter(
            (el) =>
                    el.nik
                      .toLowerCase()
                      .includes(nikSearch.toLowerCase()) &&
                    el.name
                      .toLowerCase()
                      .includes(fullnameSearch.toLowerCase())
        ))
    }

    const current = new Date();

    return(
        <div className="employees">
            <div className="top">
                <div>
                    <h3>List Employee</h3> 
                </div>
                <div>
                    <ButtonPrimary color="dark" label="ADD" onClick={()=>navigate('/home/employees/add')}/>
                </div>
            </div>
            <div className="search">
                <CFormInput 
                    type="text" 
                    placeholder="NIK" 
                    aria-label="default input example" 
                    size="sm"
                    value={nikSearch}
                    onChange={(e)=>handleNikSearch(e)}
                />
                <CFormInput 
                    type="text" 
                    placeholder="Fullname" 
                    aria-label="default input example" 
                    size="sm"
                    value={fullnameSearch}
                    onChange={(e)=>handleFullnameSearch(e)}
                />
                <ButtonPrimary color="dark" label="SEARCH" onClick={handleSearch}/>
            </div>
            <MainTable 
                header={headCells}
                data={
                    newEmployees.map((employee)=>(
                        <CTableRow key={employee.nik}>
                            <CTableHeaderCell scope="row">{employee.nik}</CTableHeaderCell>
                            <CTableDataCell>{employee.name}</CTableDataCell>
                            <CTableDataCell>
                                {`${moment(employee.join_date).format('DD/MM/YYYY')} (${moment(current).diff(moment(employee.join_date), 'years')} Years )
                                `}
                            </CTableDataCell>
                            <CTableDataCell>{`$ ${employee.salary}`}</CTableDataCell>
                            <CTableDataCell>
                                <ButtonPrimary color="info" label="UPDATE" onClick={()=>navigate(`/home/employees/update/${employee.nik}`)}/>
                                <ButtonPrimary color="danger" label="DELETE" onClick={()=>onDelete(employee.nik)}/>
                            </CTableDataCell>
                        </CTableRow>
                    ))
                }
            />
        </div>
    )
}
export default ListEmployees;