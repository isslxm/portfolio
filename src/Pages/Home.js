import React from 'react';
import '../Pages/Home.css';

const Home = () => {
    return (
        <div className="container about-page">
            <h1>About Me</h1>
            <p>My mission is to teach you react</p>

            <section className="team">
                <h2>Meet THE Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <h3>Mirlan Nurbekov</h3>
                        <p>Lead Instructor</p>
                    </div>
                   
                </div>
            </section>
        </div>
    );
};

export default Home;