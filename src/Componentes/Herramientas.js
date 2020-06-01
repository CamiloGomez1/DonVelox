import React from 'react';
import Card from './Producto'


const styles={
    div:{overflowY: 'scroll',height:550,backgroundColor:'#CCCCCC'}
}

const arraylistServicios=[
    {
        title:"220.000 Pesos",
        description:"Conjunto de herramientas",
        img:"https://belltec.com.co/7202-large_default/set-herramientas-110-piezas-maletin-stanley-stmt81243-840.jpg",
        telefono: "3012604967",
        Video: "https://www.youtube.com/watch?v=x313g62dJUY"
        

    }
]
function ListServicios() {
    return(
        <div style={styles.div}>
            {
            arraylistServicios.map(servicio => {           
            return <Card Video={servicio.Video} precio={servicio.title}  descripcion={servicio.description} img={servicio.img} telefono={servicio.telefono}/>
            })
            }
        </div>
    )
}

export default ListServicios;
