import axios from "axios";

const urnContactForm = 'api/contact-me';
const urnMessages = 'api/messages';

const storeContactData = ($data) => {
    const res= axios.post(urnContactForm, $data)
    return res;
}

const getAll = () => {
    const res = axios.get(urnMessages)
    return res;
}

const getById = async (id) => {
    const response = axios.get(`${urnMessages}/${id}`);
    return response;
};

const ContactDataService = {
   storeContactData,
   getAll,
   getById
}

export default ContactDataService;

