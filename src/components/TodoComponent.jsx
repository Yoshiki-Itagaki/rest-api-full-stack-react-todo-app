import { useParams } from "react-router-dom";
import { retrieveTodoApi } from "./todo/api/TodoApiService";
import { useAuth } from "./todo/security/AuthContext";
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";

export default function TodoComponent() {

    const {id} = useParams();
    const [description, setDescription] = useState('');
    const [targetDate, setTargetDate] = useState(null);
    const authContext = useAuth();
    const username = authContext.username;

    useEffect(() => {
        retrieveTodos();
    }, [id])

    function retrieveTodos(){
        retrieveTodoApi(username, id)
            .then(response => {
                console.log(response.data);
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate);
                console.log(description);
                console.log(targetDate);
            })
            .catch(error => {

            })

    }

    function onSubmit(values){
        console.log(values);
    }

    function validate(values){
        let errors = {
            // description: 'Enter a valid description.',
            // targetDate: 'Enter a valid target date.',
        }

        if(values.description.length<5){
            errors.description = 'Enter at least 5 characters.'
        }

        if(!values.targetDate){
            errors.targetDate = 'Enter a target date.'
        }
        if(new Date(values.targetDate) <= new Date()){
            errors.targetDate = 'Enter a date later than today.';
        }

        console.log('validating', values);
        console.log('no', values.targetDate <= new Date());
        console.log(values.targetDate);
        console.log(new Date());



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
                                <button className="btn btn-success" type="submit">Save</button>
                            </div>
                        </Form>
                    )
                }
                </Formik>
            </div>
        </div>
    )
}