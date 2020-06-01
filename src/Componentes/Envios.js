import React from 'react';
import Card from './Producto'


const styles={
    div:{overflowY: 'scroll',height:550,backgroundColor:'#CCCCCC'}
}

const arraylistServicios=[
    {
        title:"20.000 + flete ",
        description:"Envio caja-departamental",
        img:"https://novologistica.com/wp-content/uploads/2017/11/parcel.jpg",
        telefono: "3012604967",
        Video: "https://www.youtube.com/watch?v=p9f8rnN-LxM"
        

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