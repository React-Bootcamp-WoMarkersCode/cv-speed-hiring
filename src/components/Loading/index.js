import React from 'react';
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as quotesloading from '../../assets/json/quotesloading.json';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: quotesloading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

export const Loading = (props) => {

    const { title, height, width } = props;

    return (
        <>
        <FadeIn>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <h4>{title}</h4>
            </div>
            <Lottie options={defaultOptions} height={height} width={width} />
        </FadeIn>
        </>
    );
}
