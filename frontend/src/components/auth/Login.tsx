import React, {useState} from "react";
import {NavigateFunction, useNavigate} from 'react-router-dom';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";

import {login} from "../../services/auth.service"


const Login: React.FC = () => {

    let navigate: NavigateFunction = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>("");
    const handleLogin = (formValue: { email: string; password: string }) => {
        const {email, password} = formValue;

        setMessage("");
        setLoading(true);

        login(email, password).then(
            () => {
                navigate("/profile");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                setLoading(false);
                setMessage(resMessage);
            }
        );
    };

    return (
        <div className="formContainer">
            <h2>Login</h2>
            <Formik
                initialValues={{email: "", password: ""}}
                validationSchema={Yup.object({
                    email: Yup.string().email("Invalid email").required("Required"),
                    password: Yup.string().required("Required"),
                })}
                onSubmit={handleLogin}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="inputGroup">
                            <label className="label" htmlFor="email">Email</label>
                            <Field
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="username"
                            />
                            <ErrorMessage name="email" component="div" className="error"/>
                        </div>
                        <div className="inputGroup">
                            <label className="label" htmlFor="password">Password</label>
                            <Field
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <ErrorMessage name="password" component="div" className="error"/>
                        </div>
                        <button className="button" type="submit" disabled={loading}>
                            {loading ? "Logging in..." : "Login"}
                        </button>

                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {message}
                                </div>
                            </div>
                        )}
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Login;
