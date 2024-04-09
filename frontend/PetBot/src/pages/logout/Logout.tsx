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

            <div className="modal bg-slate-600 flex-col flex py-12  w-/12 mx-auto h-screen justify-center ">
                <button onClick={() => setShowModal(true)}>
                    <div className="flex flex-col w-7/12 mx-auto gap-6 py-6">
                        <div className="">
                            <p className='text-2xl text-white font-bold'>Do you want to logout?</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleLogout} className='w-5/12 mx-auto p-2 text-white font-bold outline-none bg-blue rounded-lg' >
                                Yes
                            </button>
                         
                        </div>
                        
                    </div>
                </button>
                {showModal && (
                    <h1>Good Bye</h1>
                )}
            </div>
        </div>
    );
};

export default Logout;
