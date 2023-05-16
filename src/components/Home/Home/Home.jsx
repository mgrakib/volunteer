import React from 'react';
import NavBar from '../../Share/NavBar/NavBar';
import AllEvents from '../AllEvents/AllEvents';
import useTitle from '../../../hooks/useTitle/useTitle';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <NavBar />
            <AllEvents />
        </div>
    );
};

export default Home;