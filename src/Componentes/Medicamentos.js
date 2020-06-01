import React from 'react';
import Card from './Producto'


const styles={
    div:{overflowY: 'scroll',height:550,backgroundColor:'#CCCCCC'}
}

const arraylistServicios=[
    {
        title:"10.000 pesos",
        description:"Carbamazepina 200mg",
        img:"https://salud.carlosslim.org/wp-content/uploads/2018/08/uso-medicinas-falsas-prevalece-paises-en-desarrollo.jpg",
        telefono: "3012604967",
        Video: "https://www.youtube.com/watch?v=ZivXVtuhsV8"
        

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