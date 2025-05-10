import React, { useState } from 'react';

const Logout: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    const handleLogout = () => {
        // Clear local storage
        localStorage.clear();
        // Redirect to login page
        window.location.href = '/login';
        // Notify server about logout (optional)
        // Perform any necessary cleanup
        console.log('Logging out...');
    };

    const handleCloseModal = () => {
        // Close the modal when user clicks "No"
        setShowModal(false);
    };

    return (
        <div>
            <button onClick={() => setShowModal(true)}>Logout</button>

            {showModal && (
                <div className="modal">
                    <p>Do you want to logout?</p>
                    <button onClick={handleLogout} style={{ color: 'red', border: '1px solid red' }}>
                        Yes
                    </button>
                    <button onClick={handleCloseModal}>No</button>
                </div>
            )}
        </div>
    );
};

export default Logout;
