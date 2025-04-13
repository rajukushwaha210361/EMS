import React, {useEffect, createContext, useState } from 'react'
import { getLocalstroage, setLocalstroage } from '../utils/LocalStorage';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
//    localStorage.clear() // this use to cleer all the save data or create task
    useEffect(() => {
        setLocalstroage(); //it use to save the data when any error occors the we can use this
        const {employees,admin}=getLocalstroage();
        setUserData(employees);
    },[])
    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
