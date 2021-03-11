

import React, { useEffect, useState } from "react";
import axios from "axios";
import './App.css';
import  Button from "react-bootstrap/Button" ;
import  Form from "react-bootstrap/Form" ;
import Container from "react-bootstrap/Container" ;




function App() {
  const [player, setPlayer] = useState({name:"",quantidade:"",valor:""})

  console.log(player)
  function handleSearchPlayer(event, type) {

    console.log(type)

    console.log(event)
    const serializedPlayer = event.target.value;
    setPlayer({...player, [type]: event.target.value});
    

  }

  // function handleKeyPress(event) {
    
  //   if (event.charCode === 13) {
      
  //   }
  // }

  function handleSubmitPlayer() {
    axios
      .post(
        `http://localhost:8081/players`,
        player
      )
      .then((res) => {console.log(res)
        
        // if(res.data.results[ticker].error) {
        //   setError({type: 'warning', status: true, text: 'Ops... Não encontramos ação com este ticker :('})
        //   return
        // }
        // const existe = dataTicker.find((element) => element.symbol === ticker);
        // console.log(existe);

        // if (!existe) {
        //   const array = [...dataTicker, res.data.results[ticker]];
        //   setDataTicker(array);
        //   return
        // }

        // setError({type: 'danger', status: true, text: 'Ops... Você já incluiu esta ação!'})


      }).catch(error => console.log(error))
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <Form.Group>
 
  <br />
  
  <Container className="Form">
     Dados Jogador : <br/>
     <Form.Control onChange={(e) => handleSearchPlayer(e, 'name')} type="text" placeholder="Nome" /><br/><br/>
     <Form.Control onChange={(e) => handleSearchPlayer(e,'quantidade')} type="text" placeholder="Quantidade" /><br/><br/>
     <Form.Control onChange={(e) => handleSearchPlayer(e,'valor')} type="text" placeholder="Valor Pago" /><br/><br/>
  <>
     <Button onClick={handleSubmitPlayer} variant="dark">Enviar</Button>
   </>
  <br /></Container>
   
  
 
  
</Form.Group>
      </header>
    </div>
  );
}

export default App;
