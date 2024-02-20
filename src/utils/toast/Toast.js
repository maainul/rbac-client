import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import './toast.css';

const Toast = () => {
    const [toasts, setToasts] = useState([]);

    const showToast = (msg) => {
        const toast = (
            <div key={Date.now()} className={`toast ${msg.type}`}>
                {msg.icon} {msg.content}
            </div>
        );
        setToasts([...toasts, toast]);
        setTimeout(() => {
            setToasts(toasts.filter((t) => t.key !== toast.key));
        }, 4000);
    };

    return <div id="toastBox">{toasts}</div>;
};

export default Toast;
