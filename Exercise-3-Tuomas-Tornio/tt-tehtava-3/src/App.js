import React from 'react';
import './App.css';
import { useState } from 'react';




import Epiphone from './components/Epiphone';
import Gretch from './components/Gretch';
import ESP from './components/ESP';
import Prs from './components/Prs';
import Supro from './components/Supro';
import Larry from './components/Larry';
import Gibson from './components/Gibson'




function App() {


 const [searchTerm, setSearchTerm] = useState("")


    const EpiphoneData = [
    {
     topic:'Epiphone',
     body1: 'Model Slash',
     body2: ' 699 €',
     body3: 'Vintage p90 pickups',
     body4: '1'
     


    }
  ];

  const ESPData = [
    {
      topic:'ESP',
      body: 'Modern vintage',
      body2: ' 1255 €',
      body3: 'EMG Active pickups',
      body4: '4'

    }
  ];

  const GretchData = [
    {

      topic:'Gretch',
      body: 'vintage',
      body2: ' 866 €',
      body3: 'Classic p90',
      body4: '2'

    }
  ];

  const LarryData = [
    {

      topic:'Larry',
      body: 'Thick les paul',
      body2: ' 555 €',
      body3: 'Rail buckers',
      body4: '1'

    }
  ];

  const PrsData = [
    {

      topic:'PRS',
      body: 'Prs Les',
      body2: ' 1450 €',
      body3: 'Prs passive pickups',
      body4: '5'

    }
  ];

  const SuproData = [
    {

      topic:'Supro',
      body: 'Old Vintage',
      body2: ' 450 €',
      body3: 'Supro vintage decimer pickups',
      body4: '2'

    }
  ];

  const GibsonData = [
    {

      topic:'Gibson',
      body: 'vintage Custom',
      body2: ' 4980 €',
      body3: 'Gibson Custom worn humbuckers',
      body4: '4'

    }
  ];
    

   
  
  return   (


    // Alla olevalla tavalla voidaan myös käyttää DATA:JSON tietoa, mutta se ei noudata STYLES malleja
    <div>  
       <div className="haunpaikka">
      
        <input type="text" placeholder="Hae tuotetta..." onChange={(event) => 
          {setSearchTerm(event.target.value)
          }}/>
          </div>







          
          <div className= "App"> 
        {EpiphoneData.filter((val)=>
         {
          if (searchTerm=="") {
            return val = null
            
          } else if (val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val}

          }).map((val,key) => {
            
          return (
            <div>
            

          <div className="haettutulos" key={key}>
          {val.topic}
            
            {
          EpiphoneData.map(element =><Epiphone data={element}/>)

          }
            
            
          
            
              
           
          

           </div>
              
             </div>) 
             
             
            
        }
        )}

{GibsonData.filter((val)=>
         {
          if (searchTerm == "") {
            return null
            
          } else if ( val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val}

          }).map((val,key) => {
            
          return (
          <div className="haettutulos" key={key}>
            
            {val.topic} 
              
           {

            GibsonData.map(element =><Gibson data={element}/>)
           }
            
         

          
          
             </div>)
             
             
            
        }
        )}

{GretchData.filter((val)=>
         {
          if (searchTerm == "") {
            return null
            
          } else if ( val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val}

          }).map((val,key) => {
            
          return (
          <div className="haettutulos" key={key}>
           
           {val.topic} 
            {
              
           GretchData.map(element =><Gretch data={element}/>)
            
          } 

          
          
             </div>)
            
             
            
        }
        )}

{LarryData.filter((val)=>
         {
          if (searchTerm == "") {
            return null
            
          } else if ( val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val }

          }).map((val,key) => {
            
          return (
          <div className="haettutulos" key={key}>
            
            {val.topic} 
            {
              
           LarryData.map(element =><Larry data={element}/>)
            
          } 

          
          
             
             </div>)
             
            
        }
        )}

{PrsData.filter((val)=>
         {
          if (searchTerm == "") {
            return null
            
          } else if ( val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val }

          }).map((val,key) => {
            
          return (
          <div className="haettutulos" key={key}>
            
            {val.topic}
            {
              
          PrsData.map(element =><Prs data={element}/>)
            
          } 

          
          
             </div>)
             
             
            
        }
        )}

{SuproData.filter((val)=>
         {
          if (searchTerm == "") {
            return null
            
          } else if ( val.topic.toLowerCase().includes(searchTerm.toLowerCase()))         
          {
            return val }

          }).map((val,key) => {
            
          return (
          <div className="haettutulos" key={key}>
           
           
          {val.topic}
            {
              
          SuproData.map(element =><Supro data={element}/>) 
            
          } 

          
          
             </div>)
             
             
            
        }
        )}
   
   </div>

  
  <div className="paikka">
  {
 
EpiphoneData.map(element => <Epiphone data={element} />)

  }
  {
ESPData.map(element => <ESP data={element} />)

  }

{

GibsonData.map(element => <Gibson data={element} />)
}
{

GretchData.map(element => <Gretch data={element} />)
}
{

LarryData.map(element => <Larry data={element} />)
}
{

PrsData.map(element => <Prs data={element} />)
}
{

SuproData.map(element => <Supro data={element} />)
}



</div>
</div>


    
  );
  }

export default App;
  