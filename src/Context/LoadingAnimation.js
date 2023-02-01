import React from 'react';
import { GridLoader } from 'react-spinners';

const LoadingAnimation = () => {
    return (
        <div className='h-[700px] flex justify-center items-center'>

            <GridLoader color="#b04dff" />
        </div>
    );
};

export default LoadingAnimation;