import React from "react";

export const Step1 = ({
    currentStep,
    handleChange,
    label,
    name,
    value,
    placeholder,
    type,
    handleBlur
}) => {

    if (currentStep !== 1) {
        return null
    } 
    
    return (
        <>
        <div className="form-group">
            <div className="form-input-container">
                <label className="input">{label}</label>
                <input
                    value={value}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
        </div>
        </>
    );
};

export const Step2 = ({
    currentStep,
    handleChange,
    label,
    name,
    value,
    placeholder,
    type,
    handleBlur
}) => {

    if (currentStep !== 2) {
        return null
    }

    return (
        <>
        <div className="form-group">
            <div className="form-input-container">
                <label className="input">{label}</label>
                <input
                    value={value}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
        </div>
        </>
    );
};

export const Step3 = ({
    currentStep,
    handleChange,
    label,
    name,
    value,
    placeholder,
    type,
    handleBlur
}) => {

    if (currentStep !== 3) {
        return null
    }

    return (
        <>
        <div className="form-group">
            <div className="form-input-container">
                <label className="input">{label}</label>
                <input
                    value={value}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
        </div>
        </>
    );
};