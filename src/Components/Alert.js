import React from 'react'

export default function Alert(props) {
    return (
        <>
            {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
                Neccessary Conditions : Title length greater then 3 characters and description length greater then 5 characters
            </div>}
        </>
    )
}
