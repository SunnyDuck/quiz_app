import {BrowserRouter, Routes, Route} from "react-router-dom";
import {MemoryTestRegistrationPage} from "./MemoryTest/MemoryTestRegistrationPage";
import Navbar from "./Navbar";
import MainPage from "./MainPage/MainPage";
import {useTypesSelector} from "./hooks/useTypesSelector";
import React from "react";
import MemoryTestPage from "./MemoryTest/MemoryTestPage/MemoryTestPage";
import ThinkingSpeedTestRegistrationPage from "./ThinkingSpeedTest/ThinkingSpeedTestRegistrationPage";
import ThinkingSpeedTestPage from "./ThinkingSpeedTest/ThinkingSpeedTestPage/ThinkingSpeedTestPage";

export let userId: number

const App: React.FC = () => {

  const {users} = useTypesSelector(state => state.user)
  users.length > 0 ? userId = users[users.length-1].id : userId = 0

  return(
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path={'/'} element={<MainPage/>}/>
              <Route path={'/memorytest'} element={<MemoryTestRegistrationPage/>}/>
              <Route path={'/thinkingspeedtest'} element={<ThinkingSpeedTestRegistrationPage/>}/>
              <Route path={'/memorytest/' + userId} element={<MemoryTestPage/>}/>
              <Route path={'/thinkingspeedtest/' + userId} element={<ThinkingSpeedTestPage/>}/>
          </Routes>
      </BrowserRouter>
  )
}

export {App}