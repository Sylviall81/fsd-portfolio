import axios from 'axios';

export const ProjectService = () => {

    const urnProjects = 'api/projects';
    
    // const urnLogout = 'api/logout';

    const getAll = () => {
        const res = axios.get(urnProjects)
        return res;
    }

    const getById = async (id) => {
        const response = axios.get(`${urnProjects}/${id}`);
        return response;
      };

    // const login = ($data) => {
    //     const res= axios.post(urnLogin, $data)
    //     return res;
    // }

    // const logout = () => {
    //     const res= axios.post(urnLogout)
    //     return res;
    // }

    return {
        getAll,
        getById
    }
}
