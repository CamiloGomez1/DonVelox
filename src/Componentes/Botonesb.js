import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Comida from './Comidas'
import Medicamentos from './Medicamentos'
import Envios from './Envios'
import Herramientas from './Herramientas'
import Papeleria from './Papeleria'


const images = [
  {
    url: 'https://tynmedia.com/tynmag/wp-content/uploads/sites/3/2018/07/remedios-medicamento-.jpg',
    title: 'Medicamentos',
    width: '30%',
    Link: "/medicamentos",

  },
  {
    url: 'https://cuidateplus.marca.com/sites/default/files/styles/natural/public/hamburguesas.jpg',
    title: 'Comida',
    width: '40%',
    Link: "/Comidas",
  },
  {
    url: 'https://i0.wp.com/www.modregohogar.com/blog/wp-content/uploads/2019/09/Herramientas-.jpg?ssl=1',
    title: 'Herramientas',
    width: '30%',
    Link: "/Herramientas",
  },
  {
    url: 'https://sanjuanhoy.com/download/multimedia.normal.8086bb7fbebe88a2.7574696c6573206573636f6c617265735f6e6f726d616c2e6a7067.jpg',
    title: 'Papeleria',
    width: '30%',
    Link: "/Papeleria",
  },
  {
    url: 'https://edunewscolombia.files.wordpress.com/2011/03/recibos.jpg',
    title: 'Pago De Recibos',
    width: '40%',
    Link: "/Recibos",
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5803014bd1758e435b34b37b/1519062107774-ZR1YJV9V2URKNXU7OXNS/ke17ZwdGBToddI8pDm48kI4HWeNuPpW0N4dPr3o-M3pZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpybMoGdvaswKluidQ4mrS7_mrczsM2HZrL9Ac0ax0UTOem21hhPFLldodcRgZZ3OuM/Envios+a+Colombia',
    title: 'Envios',
    width: '30%',
    Link: "/Envios",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 500,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <Router>

    <div className={classes.root}>
      {images.map((image) => (
        <Link
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: image.width,
          }}

        to={image.Link}>
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.url})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>

      ))}
    </div>
  
            <Switch>
            <Route path="/Comidas">
              <Comida/>
              </Route>
            <Route path="/medicamentos">
              <Medicamentos/>
              </Route>
              <Route path="/Envios">
              <Envios/>
              </Route>
              <Route path="/Herramientas">
              <Herramientas/>
              </Route>
              <Route path="/Papeleria">
              <Papeleria/>
              </Route>
            </Switch>

    </Router>
  );
}