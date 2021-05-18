import React, { Component } from 'react';
import { Container, Typography } from "@material-ui/core";
import './App.css';
import FormularioCadastro from './Components/FormularioCadastro/FormularioCadastro';

class App extends Component {
  render(){
    return (      
      <Container component="article" maxWidth="sm" >
        <br />
        <Typography component="h2" variant="h5" align="center">Formulário de Cadastro</Typography>
        <FormularioCadastro aoEnviar={ aoEnviarForm } validarCPF={ validarCPF }/>
      </Container>
    );
  }
}

function aoEnviarForm(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {valido:false, texto:"O CPF deve ter 11 dígitos"}
  }else{
    return {valido:true, texto:""}
  }
}

export default App;
