import React from "react";
import { useField } from 'formik';

export const FormCheckbox = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'checkbox' });
    
    return (
        <>
        <div className="form-group">
            <div className="form-input-container">
                <label className="checkbox">
                    <input type="checkbox" {...field} {...props} />
                    {children}
                </label>

                {meta.touched && meta.error ? (
                    <div className="error">{meta.error}</div>
                ) : null}
                
            </div>
        </div>    
        </>
    );
};