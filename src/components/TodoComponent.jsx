import { useNavigate, useParams } from "react-router-dom";
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./todo/api/TodoApiService";
import { useAuth } from "./todo/security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import moment from 'moment'

export default function TodoComponent() {

    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(null);
    const authContext = useAuth();
    const navigate = useNavigate();

    const username = authContext.username;

    useEffect(() => {
        retrieveTodos();
    }, [id])

    function retrieveTodos(){
        console.log('type', typeof id);
        if(id != -1){
            retrieveTodoApi(username, id)
                .then(response => {
                    console.log(response.data);
                    setDescription(response.data.description);
                    setTargetDate(response.data.targetDate);
                })
                .catch(error => {
                    console.log(error);
                })    
        }
    }

    function onSubmit(values){
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false,
        }
       
        if(id == -1){
            updateTodoApi(username, id, todo)
                .then(response => {
                    setDescription(response.data.description);
                    setTargetDate(response.data.targetDate);
                    navigate('/todos');
                })
                .catch(error => {
                    console.log(error);
                })            
        } else {
            createTodoApi(username, todo)
                .then(response => {
                    setDescription(response.data.description);
                    setTargetDate(response.data.targetDate);
                    navigate('/todos');
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }

    function validate(values){
        let errors = {};

        if(values.description.length < 5){
            errors.description = 'Enter at least 5 characters.'
        }

        if(!values.targetDate || values.targetDate === '' || !moment(values.targetDate).isValid()){
            errors.targetDate = 'Enter a target date.'
        }
        if(new Date(values.targetDate) <= new Date()){
            errors.targetDate = 'Enter a date later than today.';
        }

        return errors;
    }

    return (
        <div className="container">
            <h1>Enter Todo Details</h1>
            <div>
                <Formik initialValues={{description, targetDate}} 
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                {
                    (props) => (
                        <Form>

                            <ErrorMessage 
                                name="description"
                                component="div"
                                className="alert alert-warning"
                            />
                            <ErrorMessage 
                                name="targetDate"
                                component="div"
                                className="alert alert-warning"
                            />
                            <fieldset className="form-group">
                                <label>Description</label>
                                <Field type="text" className="form-control" name="description"/>
                            </fieldset>
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field type="date" className="form-control" name="targetDate"/>
                            </fieldset>
                            <div>
                                <button className="btn btn-success m-5" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}