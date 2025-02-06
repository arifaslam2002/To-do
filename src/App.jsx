import React from 'react'
import Nav from './Component/Navbar/Nav';
import Footer from './Component/Footer/Footer';
import Todolist from './Pages/lists/lists';
import './App.css'
const App = () => {
  return (
    <>
      <Nav />
      <Todolist />
      <Footer />
    </>
  )
}

export default App