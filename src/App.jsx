
import './App.css'
import Contacts from './components/Contacts'
import Who from './components/Who'
import Works from './components/Works'
import Hero from './components/Hero'
import Box from './components/box'
import Mymodel from './components/mymodel'
import Workexp from './components/experience'
import ParticlesContainer from './components/ParticlesContainer'
import Aboutme from './components/Aboutme'
import ThreeJSExample from './components/Who'
import Navbar from './components/Navbar'
import Sphere from './components/Who'



function App() {
  

  return (
    <div className='styling'>
      
      {/* <Navbar /> */}
      <Hero/>
      <Box/>
      <Workexp/>
      {/* <ThreeJSExample/>
       */}
        <Sphere />
      {/* <SectionWrapper/> */}
      <Works/>
      <Contacts/>
     
      
     

    </div>
  )
}

export default App
