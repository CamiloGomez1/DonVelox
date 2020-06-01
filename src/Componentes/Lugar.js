import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


  const images= [
  {
     img: 'https://i.ytimg.com/vi/iW2f8goYUu0/maxresdefault.jpg',
      title: 'Camiones',
     author: '@DonVelox',
  },
  {
    img: 'https://encolombia.com/wp-content/uploads/2019/11/Lo-Mejor-del-Black-Friday-con-Servientrega-Box-696x398.jpg',
     title: 'Promociones',
    author: '@BlackFriday',
 },
 {
    img: 'https://imgcdn.larepublica.co/i/336/2018/05/21165918/7-ppal13.jpg',
     title: 'Somos Familia',
    author: '@Sevientrega',
 },
 {
    img: 'https://servientrega.us/wp-content/uploads/2019/06/DSC_7499-1-1170x646.jpg',
     title: 'Profesionales',
    author: '@Servientrega',
 },
 {
    img: 'https://laherradura.com.co/wp-content/uploads/2017/09/servientrega-1.jpg',
     title: 'Ecologicos',
    author: '@GreenPeace',
 },
 {
    img: 'https://pbs.twimg.com/media/DPqNgGZWkAIgnhq.jpg',
     title: 'Modernos',
    author: '@BillGates',
 },
   
   
      
  ];
 
export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile>
        {images.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
