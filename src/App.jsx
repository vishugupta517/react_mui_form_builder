import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateForm from './pages/CreateForm';
import { FormProvider } from './components/context/FormContext';
import { NavbarProvider } from './components/context/NavbarContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'dashboard/form/:title/:id',
        element: <CreateForm />
      }
    ]
  }
]);

function App() {
  return (
    <>
      <FormProvider>
        <NavbarProvider>
          <RouterProvider router={router} />
        </NavbarProvider>
      </FormProvider>
    </>
  );
}

export default App;
