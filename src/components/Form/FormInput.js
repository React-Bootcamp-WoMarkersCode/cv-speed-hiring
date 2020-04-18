import React from "react";
import { useField } from 'formik';

export const FormInput = ({ label, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <>
            <div className="form-group">
                <div className="form-input-container">
                    <label htmlFor={props.id || props.name}>{label}</label>
                    <input className="text-input" {...field} {...props} />
                    {meta.touched && meta.error ? (
                        <div className="error">{meta.error}</div>
                    ) : null}
                </div>
            </div>
        </>
    );
};