import React from "react"
import './Modal.css'

const ConfirmModal = ({onOk , okText , cancelText , text , onClose , isOpen =false}) =>{

    const handleOk = () => {
        onOk && onOk()
    }
    const handleCancel = (event) => {
        event.stopPropagation()
        onClose && onClose()
    }
    return(
        <>

            <div className={" modal " + (isOpen ? "Open" : "Close")} onClick={handleCancel}>
                <div>
                    <span>{text}</span>
                    <div>
                        <button onClick={handleOk} className="delete-button">{okText}</button>
                        <button onClick={handleCancel} className="cancel-button">{cancelText}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ConfirmModal