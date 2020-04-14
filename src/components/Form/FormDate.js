import React from "react";
import { useField } from 'formik';

export const FormDate = ({ children, ...props }) => {

    const [field, meta] = useField({ ...props, type: 'date' });

    return (
        <>
            <label className="date">
                <input type="date" {...field} {...props} />
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </>
    );
};