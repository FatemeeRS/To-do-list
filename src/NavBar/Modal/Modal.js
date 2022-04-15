import React , { useState } from "react"
import './Modal.css'

const ConfirmModal = ({onOk , text}) =>{

    const [Open, setOpen] = useState(false)

    const handleOk = () => {
        onOk && onOk()
        setOpen(false)
    }
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleCancel = (event) => {
        event.stopPropagation()
        setOpen(false)
    }


    return(
        <>
            <button onClick={handleOpen} className="delete-ok">×</button>
            <div className={" modal " + (Open ? "Open" : "Close")} onClick={handleCancel}>
                <div>
                    <span>{text}</span>
                    <div>
                        <button onClick={handleOk} className="delete-button">delete</button>
                        <button onClick={handleCancel} className="cancel-button">cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmModal