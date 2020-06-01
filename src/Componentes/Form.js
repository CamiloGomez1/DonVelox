import React from 'react';
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import { Typography, Button } from '@material-ui/core';
import firebase from './Firebase'


class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            nombre:"",
            NIT:"",
            direccion:"",
            telefono:"",
            nombreD:"",
            telefonoD:"",
            idD:""

        }
    }

    saveValue(e,estado){
        this.setState({[estado]:e.target.value})
    }

    
    addUser(){
       const db= firebase.firestore();
        const userRef = db.collection("comercios").add({
            nombre: this.state.nombre,
            direccion: this.state.direccion,
            documento: this.state.NIT,
            telefono: this.state.telefono,
           nombreD: this.state.nombreD,
           telefonoD:this.state.telefonoD,
           idD:this.state.idD

        });
        this.setState({
            nombre:"",
            NIT:"",
            direccion:"",
            telefono:"",
            nombreD: "",
            telefonoD:"",
            idD:""

        })
    }

    render(){
        return(<Paper>
            <Typography variant="h5" component="h5">Datos Del Comercio</Typography>
            <TextField label={"Nombre"} fullWidth={true} onChange={(e)=>this.saveValue(e,"nombre")}/>
            <TextField label={"NIT"} fullWidth={true} onChange={(e)=>this.saveValue(e,"NIT")}/>
            <TextField label={"Dirección"} fullWidth={true} onChange={(e)=>this.saveValue(e,"direccion")}/>
            <TextField label={"Teléfono"} fullWidth={true} onChange={(e)=>this.saveValue(e,"telefono")}/>
            <TextField label={"Nombre Dueño"} fullWidth={true} onChange={(e)=>this.saveValue(e,"nombreD")}/>
            <TextField label={"Teléfono"} fullWidth={true} onChange={(e)=>this.saveValue(e,"telefonoD")}/>
            <TextField label={"id Dueño"} fullWidth={true} onChange={(e)=>this.saveValue(e,"idD")}/>
            <Button color="secondary" onClick={()=>this.addUser()}>Siguiente</Button>
            
            </Paper>
            
        )
    }
}
export default Form;