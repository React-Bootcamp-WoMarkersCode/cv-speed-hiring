import React from "react";
import { useField } from 'formik';

export const FormFile = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'file' });
    
    return (
        <>
            <label className="file">
                <input type="file" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};