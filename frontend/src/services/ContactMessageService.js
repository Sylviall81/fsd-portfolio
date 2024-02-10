import axios from "axios";

const urnContactForm = 'api/contact-me';

const storeContactData = ($data) => {
    const res= axios.post(urnContactForm, $data)
    return res;
}


const ContactDataService = {
   storeContactData
}

export default ContactDataService;

