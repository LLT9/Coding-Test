import React from "react";
import { useTranslation } from "react-i18next";

const Profile = () => {
    return (
        <div className='Profile'>
            <div className='divsq'>
                <aside className='left'>
                    <figure>
                        <img src='https://picsum.photos/250/250/?random=10 ' alt='' className='photo' />
                        <figcaption className='userName'>Admin</figcaption>
                    </figure>
                </aside>
                <main className='right'>
                    <h1>Welcome</h1>
                    <fieldset>
                        <legend>User information</legend>
                        <ul>
                            <li>user Name</li>
                            <li>user Account</li>
                        </ul>
                    </fieldset>
                </main>
            </div>
        </div>
    );
};

export default Profile;
