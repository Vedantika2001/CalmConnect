import React from 'react';

import {BrowserRouter, Route, Routes} from "react-router-dom"
import { NavigationBar } from './components/navigationbar';
import { Home } from './components/Home';
import { Services } from './components/Services';

// Import other pages as needed

function App() {
  return (
    <BrowserRouter>
    <NavigationBar></NavigationBar>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Services' element={<Services/>}></Route>
     
      {/* <Route path='/upcoming-treks' element={<upcomingTreks/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
      <Route path='/about-us' element={<AboutUs/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/upcoming-treks' element={<UpcomingTreks/>}></Route>
       
      <Route path="/signin" component={SignIn} />  */}


    </Routes>
    {/* <Footer></Footer> */}
    </BrowserRouter>
  );
}

export default App;