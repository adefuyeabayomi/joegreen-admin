import React,{useState} from "react";

import './style.css'
interface inputProps {
    placeholder?: string,
    value: string,
    onChange: (e)=>void,
    icon: React.JSX.Element | string
}
export function InputMain ({value,placeholder,onChange,icon}: inputProps): React.JSX.Element {
    return (
        <div>
            <div className="InputMainContainer">
                <input type="text" value={value} placeholder={placeholder} onChange={(e)=>onChange(e.target.value)} />
                <i className="no-space inputIconContainer">{icon}</i>
            </div>
        </div>
    )
}