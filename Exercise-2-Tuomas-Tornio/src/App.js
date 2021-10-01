import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);
    this.state = {
      count: 0}
    
    
    this.state = {
      
      onklikattu: false,

      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
        
      ],
      
    };
   /*  setTimeout(() => {
    //this.state.item = [ ]     ÄLÄ KÄYTÄ TÄTÄ
   // this.setState({ items: []}); TÄSSÄ OIKEA TAPA AJASTAA
   this.setState ({ items: [...this.state.items, {id: 5, value: "Carrots", qty: 5}]});
    }, 5000);
   */
     
     
  }
  
    Satunnainen=(min,max,number) =>
    {
      min = Math.ceil(1);
      max = Math.floor(30);
       var RandomNumber = Math.floor(Math.random() * (max - min) + min );
       this.setState({ 

        NumberHolder : RandomNumber
        
       }
       );

      
     

    }

    Klikkaus=() =>
    {
     this.setState = { onklikattu: true }
     
     

    };
   
    
    

    LisaatavaraaPorkkana = () => {
      this.setState ({ items: [...this.state.items, {id: 5, value: "Carrots", qty: this.state.NumberHolder ,unit:    'kpl'}]});
      
      
     
       
    }
    

    LisaatavaraaOlut = () => {
      this.setState ({ items: [...this.state.items, {id: 6, value: "Beer", qty: this.state.NumberHolder ,unit :    'Bottles'}]});
     
    }

    LisaatavaraaLeipa = () => {
      this.setState ({ items: [...this.state.items, {id: 7, value: "Bread", qty: this.state.NumberHolder , unit:      'pieces'}]});

    }

    LisaatavaraaMakarooni = () => {
      this.setState ({ items: [...this.state.items, {id: 8, value: "Mackaron", qty: this.state.NumberHolder,unit:'bags'}]});
  

      
    };

    // YRITIN MONTA KERTAA TEHDÄ VIDEON MUKAISTA ELEMENTIN PÄIVITYSTÄ, MUTTA EI TOIMINUT
    //VARMAANKIN JOHTUU SIIITÄ, ETTÄ KÄYTÄN NUMERON SEKOITTAJAA KOSKA ONGELMAT TULIVAT QTY:SSÄ
   // paivita = (kuvaus, maara) => {
   // return () => {
   // const searchResult = this.state.items.findIndex((Element, index, array) => {
   //  if(Element.value === kuvaus)  {
   //    return true;
    // } else {
   //    return false
   //  }
   // });
  //  if(kuvaus != -1) {
   //  let newItems = [...this.state.items];
  //   newItems[kuvaus].qty += maara
  //  }else {
   //     this.setState({
   //       items:
   //       [...this.sateitems,
   //         {id: this.state.items.lenght + 1,
   //         value: kuvaus, qty: maara}
   //       ]
   //     });

   // }


   // }




paivita = (kuvaus, NumberHolder) =>
{

  this.setState ({ items: [...this.state.items, {id: this.state.items.lenght +1, value: kuvaus, qty: this.state.NumberHolder,unit:''}]});
};



    

     

    
    
  render()
  { const { count } = this.state
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
        
      <ShoppingList items={ this.state.items } />
        <div> MAX MÄÄRÄ 30... <div/>
    
        
      

        
        <button onClick={() =>{this.paivita('Porkkana'); this.Satunnainen();}}>Lisää Porkkana</button> 
  
  
        
        <button onClick={() => { this.paivita('Leipä'); this.Satunnainen();}}>Lisää Leipää</button> 
  
  
        
        <button onClick={() =>  {this.paivita('Makarooni'); this.Satunnainen();}}>Lisää Makaronia </button> 

        <button onClick={() =>  {this.paivita('Olut'); this.Satunnainen();}}>lisaa olutta </button>
     
     
    </div> 
    </div> 
  }
}

export default App;