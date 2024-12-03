import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Profile = () => {

    const { user } = useContext(AuthContext);
    // console.log(user);

    return (
        <div>
            <p>Profile</p>
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>Photo: {user?.photoURL}</p>
            <img src={user?.photoURL} alt="" />
        </div>
    );
};

export default Profile;