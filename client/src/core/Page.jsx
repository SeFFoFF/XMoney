import React from "react"
import "../assets/css/page.css"

export const Page = ({ children }) => {
    return (
        <div className="container">
            {
                children
            }
        </div>
    )
}