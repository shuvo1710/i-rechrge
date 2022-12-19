import React from 'react';
import Banner from '../../Components/Banner/Banner';
import UpdateProfile from '../../Components/UpdateProfile/UpdateProfile';

const UpdateProfilePage = () => {
    const data = {
        heading:'Update Profile',
        img:'Transaction.png',
        breadCrumb: [
            {
              title: 'Home',
              link: '/home'
            }, {
              title: 'Update Profile',
            }
          ]
      }
    return (
        <div>
            <Banner data={data}/>
            <UpdateProfile/>
        </div>
    );
};

export default UpdateProfilePage;