import React from "react"
import { ErrorMessage } from "./ErrorMessage"

export const Input = ({ className, type, placeholder, name, register, rules, errors }) => {

    return (
        <div className={errors[name]?.message ? `${className} ${className}--error` : className}>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
            />
            <ErrorMessage error={errors[name]}/>
        </div>
    )
}