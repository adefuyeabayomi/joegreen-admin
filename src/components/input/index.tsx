import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface inputProps {
  placeholder?: string;
  value: string;
  onChange: (e: string) => void;
  icon?: React.JSX.Element | string;
  type?: string;
  errorMessage?: string;
  validMessage?: string;
  showError?: boolean;
  onFocus?: ()=>void,
  onBlur?: ()=>void
}

export function InputMain({
  type = 'text',
  value,
  placeholder,
  onChange,
  icon = <FontAwesomeIcon icon={faCircleNotch} />,
  errorMessage = 'Invalid Input! Check and try again.',
  showError = false,
  onFocus = ()=>{return},
  onBlur = ()=>{return}
}: inputProps): React.JSX.Element {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="InputMainContainer">
        <input
          type={showPassword ? 'text' : type}
          className="JGInputMain"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
        />
        <i className="no-space inputIconContainer" onClick={handleTogglePassword}>
          {type === 'password' ? (
            showPassword ? (
              <FontAwesomeIcon color="#aeaeae" icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon color="#aeaeae" icon={faEye} />
            )
          ) : (
            icon
          )}
        </i>
      </div>
      { 
      showError ? 
      (<div className="error-message-container">
          <p className="no-space font-mini">{errorMessage}</p>
      </div>)
      : null
      }
    </div>
  )
}
