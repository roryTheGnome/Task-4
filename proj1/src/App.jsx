import { useState } from 'react'

import './App.css'
import Footer from "./Components/Footer.jsx";
import Card from "./Components/Card/Card.jsx";
import Title from "./Components/Title.jsx";
import Playlists from "./Components/Playlists.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className="header">
            <Title s="TASKS"/>
        </div>

        <div className="tasks">
            <Card name="Task-1" description="HTML-CSS-Git" isActive={true} submitted={true}/>
            <Card name="Task-2" description="JS 1" isActive={true} submitted={true} />
            <Card name="Task-3" description="JS 2" isActive={true} submitted={true} />
            <Card name="Task-4" description="React" isActive={true} s deadline={new Date().getDate()}/>
            <Card name="Task-5" description="React Practice" />
            <Card name="Task-6" description="TypeScript"/>
            <Card name="Task-7" description="TS Practice"/>
            <Card name="Task-8" description="Group Project" />
        </div>
        
        <Playlists/>

        <Footer link={"https://github.com/roryTheGnome"} owner={"Gnome"} />
    </>
  )
}

export default App
