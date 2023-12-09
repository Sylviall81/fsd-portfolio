import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AdminLogin from '../pages/admin-pages/AdminLogin';
import Portfolio from '../pages/Portfolio';
import ContactMe from '../pages/ContactMe';

//import App from '../App';



const router = createBrowserRouter([
    { path: '/',
    element: <Home/>
    },
    { path: '/admin',
    element: <AdminLogin/>
    },
    { path: '/portfolio',
    element: <Portfolio/>
    },
    { path: '/contact-me',
    element: <ContactMe/>
    }
])

export default router;