import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form from './Form'
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player'
import Lugar from './Lugar'
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
  },
  media: {
    height:600,
  },
});

export default function Mini(props) {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
    <Grid item xs={6}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.img}
          title={props.precio}
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {props.precio}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.Descripcion}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {props.telefono}

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Comprar
        </Button>
      </CardActions>
 
    </Card>
    </Grid>
    <Grid item xs={6}>
    <ReactPlayer url={props.Video} playing />
    <Lugar/>
    </Grid>
    </Grid>

    
  );
}
