import React, { useState } from "react";
import './style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

interface FileInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  showPreview?: boolean;
}

interface inputProps {
  placeholder?: string;
  value: string | number;
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
  icon = <FontAwesomeIcon icon={faCircleNotch}  color="#aeaeae"/>,
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
export function TextAreaMain({
  value,
  placeholder,
  onChange,
  icon = <FontAwesomeIcon icon={faCircleNotch}  color="#aeaeae"/>,
  errorMessage = 'Invalid Input! Check and try again.',
  showError = false,
  onFocus = ()=>{return},
  onBlur = ()=>{return}
}: inputProps): React.JSX.Element {
  return (
    <div>
      <div className="InputMainContainer">
        <textarea
          className="JGTextAreaMain"
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}>

        </textarea>
        <i className="no-space inputIconContainer">
          {icon}
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
export const FileInput: React.FC<FileInputProps> = ({ onChange, placeholder, showPreview }) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
          const file = e.target.files[0];
          setFileName(file.name);

          if (showPreview && file.type.startsWith('image/')) {
              const reader = new FileReader();
              reader.onloadend = () => {
                  setPreviewUrl(reader.result as string);
              };
              reader.readAsDataURL(file);
          } else {
              setPreviewUrl(null);
          }
      } else {
          setFileName(null);
          setPreviewUrl(null);
      }
      onChange(e);
  };

  return (
      <div>
          <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              style={{ display: 'none' }}
              id="file-input"
          />
          <label htmlFor="file-input" className="file-input-label">
              {fileName ? fileName : placeholder}
          </label>
          {showPreview && previewUrl && (
              <div className="file-preview">
                  <img src={previewUrl} alt="Preview" className="file-preview-img" />
              </div>
          )}
      </div>
  );
};