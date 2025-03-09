import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedOptions from './components/FeaturedOptions';
import MemberStories from './components/MemberStories';
import Footer from './components/Footer';
import "./styles/global.css";
import "./styles/responsive.css";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedOptions />
      <MemberStories />
      <Footer />
    </div>
  );
}

export default App;