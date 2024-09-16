import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import SelectRole from './pages/SelectRole';
import GetStartedBuyer from './pages/GetStartedBuyer';
import GetStartedFarmer from './pages/GetStartedFarmer';





function App() {

  // Add New User
  const addBuyer = async (newBuyer) => {
    const res = await fetch('/api/db', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newBuyer),
    });
    return;
  };


  
  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route path='/' >
        <Route index element={<HomePage/>}/>
        <Route path = '/select-role' element={<SelectRole/>} />
        <Route path = '/get-started-buyer' element={<GetStartedBuyer addBuyerSubmit={addBuyer}/>} />
        <Route path = '/get-started-farmer' element={<GetStartedFarmer/>} />
      </Route>
    ));

  return <RouterProvider router={router}/>;
}
  export default App;
