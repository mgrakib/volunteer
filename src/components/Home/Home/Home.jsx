import React from 'react';
import NavBar from '../../Share/NavBar/NavBar';
import AllEvents from '../AllEvents/AllEvents';
import useTitle from '../../../hooks/useTitle/useTitle';
import AnimatedNav from '../AnimatedNav/AnimatedNav';

const Home = () => {
    useTitle('Home')
    return (
        <div className=' '>
            <NavBar />

            <AnimatedNav />
            <AllEvents />

            
            
        </div>
    );
};

export default Home;