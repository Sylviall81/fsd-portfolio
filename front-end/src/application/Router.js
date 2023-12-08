import { createBrowserRouter } from 'react-router-dom';
//import App from '../App';
import Main from '../pages/Main';
import AdminLoginPage from '../pages/adminPages/AdminLoginPage';
import Portfolio from '../pages/Portfolio';
import ContactPage from '../pages/ContactPage';

const router = createBrowserRouter([
    { path: '/',
    element: <Main/>
    },
    { path: '/admin',
    element: <AdminLoginPage/>
    },
    { path: '/projects',
    element: <Portfolio/>
    },
    { path: '/contact',
    element: <ContactPage/>
    }
])

export default router;