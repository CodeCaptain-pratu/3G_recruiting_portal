import { createBrowserRouter } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';
import ProtectedRoutes from './ProtectedRoutes';

const router = createBrowserRouter([ProtectedRoutes, PublicRoutes]);

export default router;
