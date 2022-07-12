import React from "react"
import "../assets/css/error-message.css"

export const ErrorMessage = ({ error }) => {
    return error && (
        <div className="error-message">
            {
                error.message
            }
        </div>
    )
}
