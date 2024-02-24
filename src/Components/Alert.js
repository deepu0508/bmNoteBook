import React from 'react'

export default function Alert(props) {
    return (
        <>
            {props.alert.check && <div className="alert alert-success alert-dismissible fade show" role="alert">
                {props.alert.mess}
            </div>}
        </>
    )
}
