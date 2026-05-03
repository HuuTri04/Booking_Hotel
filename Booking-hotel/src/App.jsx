import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import AddRoom from './components/room/AddRoom'
import ExistingRooms from "./components/room/ExistingRooms"


function App() {

  return (
    // <>
    //   <AddRoom/>
    // </>
    <Routes>
      <Route path="/" element={<AddRoom />} />
      <Route path="/add-room" element={<AddRoom />} />
      <Route path="/existing-rooms" element={<ExistingRooms />} />
    </Routes>
  )
}

export default App
