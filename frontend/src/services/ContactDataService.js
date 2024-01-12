import axios from "axios";

export const ContactDataService = () => {

     const urnContactForm = 'api/contact';
    // const urnLogin = 'api/login';
    // const urnLogout = 'api/logout';

    const storeContactData = ($data) => {
        const res= axios.post(urnContactForm, $data)
        return res;
    }

    // const login = ($data) => {
    //     const res= axios.post(urnLogin, $data)
    //     return res;
    // }

    // const logout = () => {
    //     const res= axios.post(urnLogout)
    //     return res;
    // }

    return {
        storeContactData
        
    }
}
