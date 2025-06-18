// Fonctionnalités
import { useState } from 'react'

// Fichiers
import './App.css'
import Title from './components/Title';
import InfoButton from './components/InfoButton';
import Code from './components/Code';
import Type from './components/Type';

// Images
import logo from '../public/img/Logo.png';

function App() {

  return (
    <section id="body">
      <img src={logo} alt="Logo de QareData" class="logo" />
      <Title title="TERRASSES DU CHATEAU" address="10 RUE DU CHATEAU, 59000, Lille" />
      <h2 class="h2" >QR codes triés par type :</h2>
      <Code/>
      <Type/>
      <style jsx>
        {`
          .logo {
            width: 80dvw;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          p {
            text-align: center;
            font-size: 1.5rem;
            color: #333;
          }
          h2 {
            align-self: flex-start;
            font-size: 1.5em;
            color: var(--blue);
            font-weight: 700;
            margin: 1em 0;
          }
        `}
      </style>
      <InfoButton />

    </section>
  )
}

export default App
