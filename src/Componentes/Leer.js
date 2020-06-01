import React from 'react'
import { Table, TableRow, TableBody, TableCell, Button, TableHead } from '@material-ui/core'
import { Typography} from '@material-ui/core';
import firebase from './Firebase'


class Lista extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            comercios:[]

        }
    }
    getComercio() {
        var db = firebase.firestore();
        db.collection("comercios").get().then((querySnapshot) => {
            let comercios=[];
            querySnapshot.forEach((doc) => {
                let comercio=doc.data( );
                comercios.push(comercio);

            });
            this.setState({comercios})
        });
    }
    componentDidMount(){
        this.getComercio();

    }


    render() {
        return (
            <>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Telefono</TableCell>
                            <TableCell >Direccion</TableCell>
                            <TableCell >Nombre Dueño</TableCell>
                            <TableCell >Telefono dueño</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.comercios.map((p) => {
                            return (
                                <TableRow>
                                    <TableCell>{p.nombre}</TableCell>
                            <TableCell>{p.telefono}</TableCell>
                                    <TableCell>{p.direccion}</TableCell>
                                    <TableCell>{p.nombreD}</TableCell>
                                    <TableCell>{p.telefonoD}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>

            </>
        )
    }
}
export default Lista;
