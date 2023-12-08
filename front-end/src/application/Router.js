import { createBrowserRouter } from 'react-router-dom';
//import App from '../App';
import Main from '../pages/Main';
import AdminLoginPage from '../pages/adminPages/AdminLoginPage';
import Portfolio from '../pages/Portfolio';

const router = createBrowserRouter([
    { path: '/',
    element: <Main/>
    },
    { path: '/admin',
    element: <AdminLoginPage/>
    },
    { path: '/projects',
    element: <Portfolio/>
    }
])

export default router;