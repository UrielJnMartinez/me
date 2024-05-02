// import { useState } from 'react'
import './App.css'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'
import Header from './components/Header/header'
import PillBadges from './components/PillBadages/pillBadges'
import WorkItem from './components/WorkItems/workItem'

function App() {

  return (
    <><main>
      <div className='container-fluid'>
        <Header></Header>
        <div className='container'>
          <section className='principal-description'>
            <h3>Informacion personal</h3>
            <Contact></Contact>
            <Contact></Contact>
            <h3>Formacion profesional</h3>
            <div>
              <span>Universidad Autonoma Indigena de Mexico</span>
              <br />
              <span>Ingeniero en Sistemas Computacionales</span>
            </div>
          </section>

          <section className='mainTimeline'>
            <h3> Sobre mi</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minima sequi voluptate officiis laboriosam atque doloribus officia accusamus corrupti vol</p>
          
            <section className='topWorks'>
              <h3>Experiencia laboral</h3>
              <WorkItem></WorkItem>
            </section>
          </section>
          <section className="tools">
            <h3>Habilidades</h3>
            <div className='tool-items'>

            <PillBadges></PillBadges>
            <PillBadges></PillBadges>
            <PillBadges></PillBadges>
            <PillBadges></PillBadges>
            </div>
          </section>
        </div>
      </div>
          <Footer></Footer>
    </main>
    </>
  )
}

export default App
