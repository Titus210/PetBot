import React, { useState } from 'react';
import axios from 'axios';
import PrimaryButton from '../../components/ui/buttons/PrimaryButton';

const PetInfoForm = () => {
    const [formData, setFormData] = useState({
        petName: '',
        petAge: '',
        breed: '',
        agreement: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Prepare data to send to the backend
        const postData = {
            pet_name: formData.petName,
            pet_age: formData.petAge,
            breed: formData.breed,
            agreement: formData.agreement ? 'yes' : 'no' // Convert boolean to string
        };

        try {
            // Make POST request to your Django backend
            const response = await axios.post('/savepet', postData);
            console.log(response.data); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <div className="input">
                    <input
                        type="text"
                        name="petName"
                        value={formData.petName}
                        onChange={handleChange}
                        placeholder="Pet Name"
                        className="w-full p-2 border-2 border-gray-200 rounded-lg"
                    />
                </div>
                <div className="input">
                    <input
                        type="text"
                        name="petAge"
                        value={formData.petAge}
                        onChange={handleChange}
                        placeholder="Age"
                        className="w-full p-2 border-2 border-gray-200 rounded-lg"
                    />
                </div>
                <div className="input">
                    <label>
                        <input
                            type="radio"
                            name="breed"
                            value="Cat"
                            checked={formData.breed === 'Cat'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Cat
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="breed"
                            value="Dog"
                            checked={formData.breed === 'Dog'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Dog
                    </label>
                </div>
                <div className="input">
                    <input
                        type="checkbox"
                        name="agreement"
                        checked={formData.agreement}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    <label htmlFor="agreement">I agree that this information is valid</label>
                </div>
                <div className="button">
                    <PrimaryButton link='homepage/chat' type="submit" colorVariation="blue" ButtonText="Save Information" />
                </div>
            </div>
        </form>
    );
};

export default PetInfoForm;
