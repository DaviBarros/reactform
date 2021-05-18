import React, { useState }from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCPF }){

    const [nome,setNome] = useState("Ricardo");
    const [sobrenome, setSobrenome] = useState("");    
    const [cpf, setCpf] = useState("");  
    const [promocoes, setPromocoes] = useState(true);  
    const [novidades, setNovidades] = useState(true);  
    const [erros, setErros] = useState({cpf: {valido:true, text:""}});

    return(<form onSubmit={(event => { event.preventDefault(); aoEnviar({nome, sobrenome, cpf, promocoes, novidades}); })}>
        
        <TextField value = {nome} onChange={ event => {
                
            setNome(event.target.value);
            
        }}
        type="text" label="Nome:" id="nome" variant="outlined" fullWidth margin="normal"/>

        
        <TextField 
        
        value = {sobrenome} onChange={ event => { 
            setSobrenome(event.target.value);            
        }}        
        
        type="text" label="Sobrenome:" id="sobrenome" variant="outlined" fullWidth margin="normal" />

        
        <TextField type="text" label="CPF:" id="cpf" variant="outlined" fullWidth margin="normal"

            onBlur={(event) => {

                const eValido = validarCPF(cpf);
                setErros({cpf:eValido})
            }}

            
        
        error={!erros.cpf.valido}

        helperText={erros.cpf.texto}

        value = {cpf} onChange={ event => { 
            setCpf(event.target.value);            
        }}   

        />

        <div align="center">
            <FormControlLabel label="Promoções" control={ 
            <Switch checked={ promocoes }
            
            onChange={(event) => { 
                setPromocoes(event.target.checked);            
            }}           
            
            name="promocoes" color="primary"  />}                      
            
            />
            
            <FormControlLabel label="Novidades" control={ <Switch 
            checked={ novidades }
            onChange={(event) => { 
                setNovidades(event.target.checked);            
            }} 
            
            name="novidades"   />} 
            
            value = {cpf} onChange={ event => { 
                setSobrenome(event.target.checked);            
            }}  
            
            />
        </div>

        <Button type="submit" variant="contained" fullWidth color="primary" margin="normal">Cadastrar</Button>
    </form>);
}

export default FormularioCadastro;
