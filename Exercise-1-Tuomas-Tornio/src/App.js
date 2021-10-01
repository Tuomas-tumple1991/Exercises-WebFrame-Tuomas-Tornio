
import React from 'react';
import './App.css';
import Header from './components/Header';
import Ilmoitukset from './components/Ilmoitukset';
import Paauutinen from './components/Paauutinen';
import Sivuuutinen from './components/Sivuuutinen';
import Ilmoitukset6 from './components/Ilmoitukset6';
import Tausta from './components/Tausta';


function App() {


  // tämä näyttää vain datan siirto esimerkin

  const IlmoituksetData = [
{
topic: 'ANALYYSI',
body: 'Tähän on koronan kanssa Turussa tultu'

}];
const Ilmoitukset6Data = [
{
  topic: 'Kulttuuri',
  body: 'Kaupungin teatterin kultapäivät alkavat!'
  
  },

  {
    topic: 'Timantti juttu',
    body: 'Lotto-voittaja toteaa, "Jatkan työelämässä"'
    
    },

  ];

  const PaauutinenData = [
    {
      topic: 'KORONAVIRUS',
      body: 'Tässä kohtaa lukee pitkä pätkä fakta tietoa koronasta, mutta jotta teksti näyttää sopivalta joudun jatkamaan sitä hieman isommaksi'
     
      
      },

    ];
 


    const SivuuutinenData = [
      {
        topic: 'Luetuimmat',
        
        topic1: '1',
        body1: 'Täällä taas lukee pitkä rimpsu aiheesta lätkä hieman tässä taas kirjoittelen, että voin katsoa toimiiko tässäkin rivin vaihto niin kuinn alunperin aijoin tehdä',
        topic2:'2',
        body2: 'Tähänkin tulee jotain vastaavaa tekstiä',
        topic3:'3',
        body3: 'Samoin Tähänkin tulee jotain vastaavaa tekstiä'
      
        
       
        
        },
  
      ];


  // Tähä loppuu ESIMERKKI
  return (
    <div>
      <Header />
      {
         IlmoituksetData.map(element => <Ilmoitukset data={element} />)
        },
        {
          Ilmoitukset6Data.map(element => <Ilmoitukset6 data={element} />)
        },
       
       {
        PaauutinenData.map(element => <Paauutinen data={element} />)
        },

{
        SivuuutinenData.map(element => <Sivuuutinen data={element} />)
        },
 
      

        


<Tausta/>

       </div>
  );
}

export default App;
