//node modules
import React ,{useState} from 'react';
import ConfirmModal from '../../components/Modal/Modal';


const ConfirmDeleteModal = ({onOk}) =>{
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = ()=>{
        setIsOpen(false)
    }
    const handleOpen = () =>{
        setIsOpen(true)
    }
    return(
    <>
        <button onClick={handleOpen} className="delete-ok">×</button>
        <ConfirmModal 
            isOpen={isOpen}
            onClose={handleClose}
            okText="Delete"
            cancelText="Cancel"
            text="Are you sure?"
            onOk={onOk}
        />
    </>

    );
};


export default ConfirmDeleteModal;