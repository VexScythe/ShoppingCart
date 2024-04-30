import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { Footer } from './components/Footer.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Hero></Hero>
    <Footer></Footer>
  </React.StrictMode>
);
