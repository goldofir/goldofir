import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import MissionSection from './components/MissionSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MissionSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
      <ThemeToggle />
    </>
  )
}

export default App
