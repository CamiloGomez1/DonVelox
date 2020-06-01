import React from 'react';
import Card from './Producto'


const styles={
    div:{overflowY: 'scroll',height:550,backgroundColor:'#CCCCCC'}
}

const arraylistServicios=[
    {
        title:"9.000 pesos",
        description:"Hamburguesa doble carne",
        img:"https://media-cdn.tripadvisor.com/media/photo-s/19/8c/4f/c4/hamburguesa-doble-carne.jpg",
        telefono: "3012604967",
        Video: "https://www.youtube.com/watch?v=E_GQw9sRMWc"
        

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