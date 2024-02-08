import axios from 'axios';

const urnProjects = 'api/projects';

const getAll = () => {
    const res = axios.get(urnProjects)
    return res;
}

const getById = async (id) => {
    const response = axios.get(`${urnProjects}/${id}`);
    return response;
};

const ProjectService = {
    getAll,
    getById
}

export default ProjectService;

