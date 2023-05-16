import React, { createContext, useEffect, useState } from 'react';

export const AuthContextAPI = createContext();
const AuthProvider = ({ children }) => {
    
   


    const authInfo = {  };
    return (
        <AuthContextAPI.Provider value={authInfo}>
            {children}
        </AuthContextAPI.Provider>
    );
};

export default AuthProvider;