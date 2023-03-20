/* eslint-disable no-unused-vars */
import { useRoutes } from 'react-router-dom';
import MainLayout  from '../layout/MainLayout';
import Loadable from '../components/Loadable';
import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// project import

const CombustionModule = Loadable(lazy(() => import('../pages/CombustionModule')));
const Dashboard = Loadable(lazy(()=> import('../pages/Dashboard')));
const Login = Loadable(lazy(()=> import('../pages/Authentication/login')));
const Register = Loadable(lazy(()=> import('../pages/Authentication/register')));

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  const logindata = useSelector((state) => state.logindata);

  useEffect(() => {

   }, [logindata]);

  const PrivateRoute = ({ path, element, isAuthenticated }) => {
    return isAuthenticated ? (
      element
    ) : (
      <Navigate to="/auth" replace />
    );
  };
  
    return useRoutes([
        {
            path: '/',
            element: <MainLayout />,
            children:[
              {
                path:'dashborad',
                element:<Dashboard/>
              },
              {
                path:'/combustion/*',
                element:<PrivateRoute path={'/combustion/*'}  element={<CombustionModule />} isAuthenticated={logindata.isLoggedIn} />
              },
              {
                path:'/',
                element: <Navigate to="/dashborad"></Navigate>,
              },
              {
                path:'*',
                element: <Navigate to="/dashborad"></Navigate>,
              }
            ]        
        },
        {
            path: '*',
            element: <Navigate to="/"></Navigate>,
        },
        {
          path:'auth',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        }
    ]);
}
