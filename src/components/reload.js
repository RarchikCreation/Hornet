import React from 'react';

const ReloadButton = () => {
    const reloadPage = () => {
        window.location.reload(); 
    };

    return (
        <div className="container">
            <img 
                src="/assets/icons/icon.png" 
                alt="Icon" 
                className="icon" 
                onClick={reloadPage}
            />
        </div>
    );
};

export default ReloadButton;
