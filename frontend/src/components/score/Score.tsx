import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import {score} from "../../services/score.service";

const Score: React.FC = () => {
    const fetchSope = async (rut: string, score: number): Promise<string> => {
        return `Sope for RUT ${rut}: ${score}`;
    };

    const [message, setMessage] = useState<string>("");
    return (
        <div className="formContainer">
            <h2>Consult Sope by RUT</h2>
            <Formik
                initialValues={{rut: "", sope: ""}}
                onSubmit={async (values, {setSubmitting, setFieldValue}) => {
                    setMessage("");
                    setFieldValue("sope", "")
                    setSubmitting(true);

                    score(values.rut).then(
                        (result) => {
                            const sope = fetchSope(values.rut, result.score);
                            setFieldValue("sope", sope);
                            setSubmitting(false);
                        },
                        (error) => {
                            const resMessage =
                                (error.response &&
                                    error.response.data &&
                                    error.response.data.message) ||
                                error.message ||
                                error.toString();
                            setMessage(resMessage);
                            setSubmitting(false);
                        }
                    )
                }}
            >
                {({isSubmitting, values}) => (
                    <Form>
                        <div className="inputGroup">
                            <label className="label" htmlFor="rut">Rut</label>
                            <Field
                                type="text"
                                className="input"
                                name="rut"
                                placeholder="Enter RUT"
                                required
                            />
                        </div>
                        <button className="button" type="submit" disabled={isSubmitting}>
                            Consult
                        </button>
                        {values.sope && (
                            <div className="form-group">{values.sope}</div>
                        )}
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

export default Score;
