import axios from 'axios';

const urnProjectForm = 'api/admin-panel';
const urnProjects= 'api/projects';



const getAll = () => {
    const res = axios.get(urnProjects)
    return res;
}

const getById = async (id) => {
    const response = axios.get(`${urnProjects}/${id}`);
    return response;
};


const storeProjectData = ($data) => {
    const res= axios.post(urnProjectForm, $data)
    return res;
}

const ProjectService = {
    getAll,
    getById,
    storeProjectData
}

export default ProjectService;

