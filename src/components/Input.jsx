
import { forwardRef } from "react";

const Input= forwardRef (function Input({label,textArea,...props},ref){
    const classes="w-full p-1 rounded-sm border-stone-600 border-b-1 bg-stone-200 text-stone-300 focus:border-stone-600 text-stone-800";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            {textArea ? <textarea ref={ref} className= {classes}  {...props} /> : <input ref={ref} className= {classes} {...props}/>}
        </p>
    );

});

export default Input;