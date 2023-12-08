import { createBrowserRouter } from 'react-router-dom';
//import App from '../App';
import Main from '../pages/Main';
import AdminLoginPage from '../pages/adminPages/AdminLoginPage';

const router = createBrowserRouter([
    { path: '/',
    element: <Main/>
    },
    { path: '/admin',
    element: <AdminLoginPage/>
    }
])

export default router;