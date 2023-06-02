import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MemoryTestRegistrationPage} from "./MemoryTest/MemoryTestRegistrationPage";
import {ThinkingSpeedTestPage} from "./ThinkingSpeedTestPage";
import Navbar from "./Navbar";
import MainPage from "./MainPage/MainPage";
import {useTypesSelector} from "./hooks/useTypesSelector";
import React from "react";


const App: React.FC = () => {

    const {users} = useTypesSelector(state => state.user)
    let userId: number
    users.length > 0 ? userId = users[users.length-1].id : userId = 0

  return(
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/memorytest'} element={<MemoryTestRegistrationPage/>}/>
              <Route path={'/memorytest' + userId} element={<div>писька</div>}/>
              <Route path={'/thinkingspeedtest'} element={<ThinkingSpeedTestPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export {App}