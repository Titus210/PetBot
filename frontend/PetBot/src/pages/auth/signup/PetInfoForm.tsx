import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router'; 


const PetInfoForm = () => {
    const [formData, setFormData] = useState({
        petName: '',
        petAge: '',
        pet_type: '',
        petBreed: '',
        agreement: false
    });
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: val
        });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //  data to send to the backend
        const postData = {
            pet_name: formData.petName,
            pet_age: formData.petAge,
            pet_type: formData.pet_type,
            pet_breed: formData.petBreed,
            agreement: formData.agreement ? 'yes' : 'no' // Convert boolean to string
        };

        try {
            // Make POST request to save pet info
            const response = await axios.post('http://localhost:5000/savepet', postData);
            console.log(response.data); 
            // Redirect to the pet-info page after successfully saving pet info
            navigate('/login');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
                <div className="input">
                    <label htmlFor="petName">Pet Name</label>
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
                    <label htmlFor="petAge">Age</label>
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
                    <label htmlFor="petBreed">Breed</label>
                    <input
                        type="text"
                        name="petBreed"
                        value={formData.petBreed}
                        onChange={handleChange}
                        placeholder="Breed"
                        className="w-full p-2 border-2 border-gray-200 rounded-lg"
                    />
                </div>
                <div className="input">
                    <label>
                        <input
                            type="radio"
                            name="pet_type"
                            value="Cat"
                            checked={formData.pet_type === 'Cat'}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        Cat
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="pet_type"
                            value="Dog"
                            checked={formData.pet_type === 'Dog'}
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
                <button
                            type="submit"
                            className="w-full p-2 text-white bg-blue rounded-lg"
                        >Save Info</button>
                </div>
            </div>
        </form>
    );
};

export default PetInfoForm;
