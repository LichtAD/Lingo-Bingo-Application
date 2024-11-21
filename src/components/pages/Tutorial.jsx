import React from 'react';

const Tutorial = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mb-10'>Tutorial</h1>
            <div className='h-[400px] flex justify-center'>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/a3ICNMQW7Ok?si=ohcmMTOmOzH803_V"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ border: "none" }}
                ></iframe>
            </div>
        </div>
    );
};

export default Tutorial;