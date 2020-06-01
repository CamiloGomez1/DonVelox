import React from 'react';
import Card from './Producto'


const styles={
    div:{overflowY: 'scroll',height:550,backgroundColor:'#CCCCCC'}
}

const arraylistServicios=[
    {
        title:"2.800 pesos",
        description:"Colores Norma",
        img:"https://images.rappi.com/products/198992-1547673396.png?d=500x500&e=webp",
        telefono: "3012604967",
        Video: "https://www.youtube.com/watch?v=6_DGdKdQnEM"
        

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