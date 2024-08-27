import React from 'react'

export default function Alert(props) {
    const {alert} = props
    return (
        <>
        <div className="container alt mt-2">
            {alert && <div className={` alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                {alert.mess}
            </div>}
        </div>
        </>
    )
}
