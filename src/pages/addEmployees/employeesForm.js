import { CCol, CForm } from "@coreui/react";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import ButtonPrimary from "../../commons/buttons/buttons";
import TextField from "../../commons/textField/textField";
import "./style/employeesForm.css";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AlertSolid from "../../commons/alert/alert";
import { useDispatch, useSelector } from "react-redux";

const EmployeesForm = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {id} = useParams();
    const [defaultValue, setDefaultValue] = useState({
        nik: "",
        name: "",
        salary: ""
    });
    const [startDate, setStartDate] = useState(new Date());
    const [isReady, setIsReady] = useState(false);
    const [nik, setNik] = useState("");
    const [fullname, setFullname] = useState("");
    const [salary, setSalary] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [isNameInvalid, setIsNameInvalid] = useState(false);
    const [isSalaryInvalid, setIsSalaryInvalid] = useState(false);
    const [isNikInvalid, setIsNikInvalid] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [alertColor, setAlertColor] = useState("");
    const [alertLabel, setAlertLabel] = useState("");

    const handleNIK = (e) => {
        const value = e.target.value.replace(/\D/g, "");

        if(value.length < 16){
            setIsNikInvalid(true);
        } else {
            setIsNikInvalid(false);  
        }
        setNik(value.slice(0, 16));
    };
    
    const handleName = (e) => {
        const value = e.target.value;

        if(value.length > 50){
            setIsNameInvalid(true);
        } else {
            setIsNameInvalid(false);
            setFullname(value);
        }
    };
    
    const handleSalary = (e) => {
        const value = e.target.value.replace(/\D/g, "");

        if(parseInt(value)<190 || parseInt(value)>1900){
            setIsSalaryInvalid(true);
        } else {
            setIsSalaryInvalid(false);
        }
        setSalary(value);
    };

    const getData = () => {
        axios
        .get(`/employee/${id}`)
        .then((res) => {
            const { data } = res;
            console.log(data);
            setNik(data.nik);
            setFullname(data.name);
            setSalary(data.salary.slice(0, -3));
            setStartDate(new Date(data.join_date))
        })
        .catch((err) => {
            console.log(err.response);
        })
        .finally(() => {
            setIsReady(true);
        });
    }

    useEffect(()=>{
        if(id !== undefined){
            getData();
            setIsDisabled(true);
        } else {
            setIsReady(true);
        }
    }, [])

    useEffect(()=>{
        if(fullname === "" || salary === "" || nik === 0){
            setButtonDisabled(true);
        } else {
            setButtonDisabled(false);
        }
    }, [fullname, salary, nik])

    const addData = () => {
        axios
        .post(`/employee`, 
            { 
                nik: nik,
                name: fullname,
                join_date: startDate,
                salary: `${salary}.00`
            })
        .then((res)=>{
            console.log(res);
            setIsVisible(true);
            setAlertColor("success");
            setAlertLabel("New Data successfuly added");
            setTimeout(() => {
                setIsVisible(false);
                navigate('/');
            }, 3000);
        }).catch((err)=>{
            console.log(err);
            setIsVisible(true);
            setAlertColor("danger");
            setAlertLabel("Failed to add data");
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        });
    }

    const updateData = () => {
        axios
        .put(`/employee/${id}`, 
            { 
                nik: defaultValue.nik,
                name: fullname,
                join_date: startDate,
                salary: `${salary}.00`
            })
        .then((res)=>{
            console.log(res);
            setIsVisible(true);
            setAlertColor("success");
            setAlertLabel("Data successfuly updated");
            setTimeout(() => {
                setIsVisible(false);
                navigate('/');
            }, 3000);
            // navigate('/');
        }).catch((err)=>{
            console.log(err);
            setIsVisible(true);
            setAlertColor("danger");
            setAlertLabel("Failed to add data");
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        });
    }

    const onCancel = () => {
        setDefaultValue(null);
        navigate('/home/employees');
    }

    const onSubmit = () => {
        if(id !== undefined){
            updateData();
        } else {
            addData();
        }
    }

    return(
        <div className="employees-form">
            <div className="title">
                {id === undefined 
                    ? 
                    <h4>Add Employee</h4>
                    :
                    <h4>Update Employee</h4>
                }
                
            </div>
            
            <AlertSolid color={alertColor} visible={isVisible} label={alertLabel}/>

            {isReady === true && 
            <CForm>
                <CCol sm={12} className="input-group" >
                    <TextField 
                        placeholder="NIK" 
                        disabled={isDisabled}
                        onChange={(e)=>handleNIK(e)} 
                        value={nik}
                        invalid={isNikInvalid}
                        feedbackInvalid="Invalid NIK"
                    />
                </CCol>
                <CCol sm={12} className="input-group">
                    <TextField 
                        placeholder="Fullname" 
                        onChange={(e)=>handleName(e)} 
                        value={fullname}
                        invalid={isNameInvalid}
                        feedbackInvalid="Name too long"
                        text="max length 50"
                    />
                </CCol>
                <CCol sm={12} className="input-group" >
                    <p>Join Date: </p>
                    <ReactDatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        maxDate={new Date()}
                        placeholderText="Join Date"
                    />
                </CCol>
                <CCol sm={12} className="input-group" >
                    <TextField 
                        placeholder="Salary" 
                        onChange={(e)=>handleSalary(e)} 
                        value={salary}
                        invalid={isSalaryInvalid}
                        feedbackInvalid="Invalid salary"
                        text="Salary > 190 and < 1900"
                    />
                </CCol>
                
                <div className="buttonGroup">
                    <ButtonPrimary color="dark" label="Cancel" onClick={onCancel}/>
                    <ButtonPrimary color="dark" label="Submit" onClick={onSubmit} isDisabled={buttonDisabled}/>
                </div>
            </CForm>
            }
            {console.log('pathname', location.pathname)}
        </div>
    )
}
export default EmployeesForm;