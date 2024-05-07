import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import AdminLogin from '../pages/admin-pages/AdminLogin/AdminLogin';
import Portfolio from '../pages/Portfolio';
import ContactMe from '../pages/ContactMe';
import AdminPanel from '../pages/admin-pages/AdminPanel/AdminPanel';
import ProjectDetail from '../pages/ProjectDetail';


//import App from '../App';



const router = createBrowserRouter([
    { path: '/',
    element: <Home/>
    },
    { path: '/admin',
    element: <AdminLogin/>
    },
    { path: '/admin-panel',
    element: <AdminPanel/>
    },
    { path: '/portfolio',
    element: <Portfolio/>
    },
    { path: '/project-detail/:id',
    element: <ProjectDetail/>
    },
    
    { path: '/contact-me',
    element: <ContactMe/>
    }
    
    
])

export default router;