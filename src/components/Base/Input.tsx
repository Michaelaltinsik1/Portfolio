'use client';
import { ChangeEvent } from 'react';

interface InputProps {
  type:
    | 'email'
    | 'text'
    | 'password'
    | 'tel'
    | 'date'
    | 'search'
    | 'datetime-local'
    | 'number'
    | 'time';
  label: string;
  name: string;
  register?: any;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  onChangeHandler?: (value: string) => void;
  errors?: any;
  isErrorSpaceDiv?: boolean;
}
const Input = ({
  type,
  label,
  name,
  register,
  placeholder,
  required = false,
  disabled = false,
  className = '',
  errors,
  isErrorSpaceDiv = true,
  onChangeHandler,
}: InputProps) => {
  let inputError: any;

  if (errors && errors.hasOwnProperty(name)) {
    inputError = errors[name];
  }
  const handleOnChange = (value: string) => {
    if (onChangeHandler) {
      onChangeHandler(value);
    }
  };
  return (
    <label className="text-body text-primary-invert" htmlFor={name}>
      <div className="flex items-center ">
        {required && <span className="mr-2 font-bold mt-1">*</span>}
        {label}{' '}
      </div>
      {register ? (
        <input
          id={name}
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          {...register(name)}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e.target.value)
          }
          className={`outline-secondary-invert border-primary-invert bg-primary text-primary-invert h-[56px] min-w-full px-4 py-3 text-body leading-150 rounded-lg border mt-2 ${className}`}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          disabled={disabled}
          placeholder={placeholder}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleOnChange(e.target.value)
          }
          className={`h-[56px] min-w-full px-4 py-3 text-body font-heading leading-150 rounded-lg border mt-2 ${className}`}
        />
      )}
      {isErrorSpaceDiv && (
        <div className="min-h-[30px] mt-1 ">
          {inputError && (
            <p className="font-bold text-bodySmall text-error">
              {inputError?.message}
            </p>
          )}
        </div>
      )}
    </label>
  );
};
export default Input;
