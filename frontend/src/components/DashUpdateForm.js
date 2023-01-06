import React, { useState } from 'react';

function DashUpdateForm() {

    const [image, setImage] = useState('');
    const [bio, setBio] = useState('');
    const [formVisible, setFormVisible] = useState(false);

    const handleUpdateUser = async () => {
        setFormVisible(false);
    }

    return (
        <div>
            <button onClick={() => setFormVisible(!formVisible)}>
                {formVisible ? 'Cancel' : 'Update your Profile'}
            </button>
            {formVisible && (
            <form onSubmit={handleUpdateUser}>
            {/* Form fields go here */}
                <input type="text" value={image} placeholder="image..." onChange={e => setImage(e.target.value)} />
                <input type="text" value={bio} placeholder="bio..."onChange={e => setBio(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    );
}

export default DashUpdateForm;