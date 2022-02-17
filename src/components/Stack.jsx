import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';

const Stack = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center font-dosis" id="stack">
          
                <h1 className="text-5xl font-bold mb-10">Stack that i use</h1>
                <div className="flex flex-wrap justify-center">
                    {content.stack.tech.map((tech, index) => {
                        return <span className={`${index % 2 === 0 ? 'animate-float' : 'animate-refloat'} w-40 h-40 ml-2 p-5 m-2 bg-white shadow-2xl rounded-full flex items-center`}>
                            <LazyLoadImage src={tech.img} alt={tech.img} />
                        </span>
                    })}
                </div>
                <p className="w-11/12 md:max-w-xl md:text-2xl tex-xl text-center mt-10 mb-10 inline-block font-dosis">{content.stack.desc}</p>
            
        </div>
    );
}
 
export default Stack;
