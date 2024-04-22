// import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'

function App() {

  return (
    <><main>
      <div className='container-fluid'>
        <Header></Header>
        <div className='container'>

          <section className='principalDescription'>
            descripcion principal
          </section>

          <section className='mainTimeline'>
            <h3> Sobre mi</h3>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque minima sequi voluptate officiis laboriosam atque doloribus officia accusamus corrupti vol</p>
          
            <section className='topWorks'>
              <h3>Experiencia laboral</h3>
              <div className="workDetail">
                <h3>mi primera chamba</h3>
                <span>nombre</span>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laborum tenetur deleniti similique unde in suscipit? Veritatis, ab sit non in, minima tenetur voluptatum repudiandae quaerat eveniet aut illum aliquam.</p>
              </div>
            </section>
          </section>
          <section className="tools">
            <h3>skills</h3>
            <li>python</li>
            <li></li>
            <li></li>
          </section>
          <footer>
            2024
          </footer>
        </div>

       
        
      </div>

    </main>
    </>
  )
}

export default App
