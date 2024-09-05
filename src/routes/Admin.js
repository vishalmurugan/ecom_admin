import { Login,Dashboard,Layout } from '../pages';
import { Routes,Route, } from 'react-router-dom';

const routes=[
    {path: '' ,component: <Login />},
    {path: 'login' ,component: <Login />},
    {path: '*' ,component: <Login />},
    {path: 'admin' , child:'dashboard' ,component: <Dashboard />}
]

const AdminRoutes = () => {
    return (

        <Routes>
            {routes.map((route, index) => {
                if (route.child) {
                    return (
                        <Route key={index} path={`/${route.path}`} element={<Layout />}>
                            <Route path={route.child} element={route.component} />
                        </Route>
                    );
                } else {
                    return (
                        <Route key={index} path={route.path} element={route.component} />
                    );
                }
            })}
        </Routes>
    );
}

export default AdminRoutes;