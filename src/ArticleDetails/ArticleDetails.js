import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import image1 from './assets/image 6.png';
import Felix from './assets/Frame (1).svg';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: '5%',
    marginLeft: '23.5%',
    maxWidth: "53%",
    marginBottom: '5%',
    fontFamily: "Overpass",
    fontWeight: "bold"
  },
  name:{
    textAlign: "left",
    marginLeft: '21.5%',
    fontFamily: "Overpass",
    fontWeight: "bold"
  },
  date:{
    textAlign: "left",
    marginLeft: '18%',
    fontFamily: "Overpass",
    color: "#000000",
    opacity: "0.4",
    marginBottom: "2%"
  },
  text:{
    textAlign: "center",
    marginTop: "2%",
    marginLeft: '23.5%',
    maxWidth: "53%",
    marginBottom: '5%',
    fontFamily: "Overpass",
    fontWeight: "bold"
  },
  subText:{
    textAlign: "center",
    marginTop: "2%",
    marginLeft: '23.5%',
    maxWidth: "53%",
    marginBottom: '5%',
    fontFamily: "Overpass",
  }


}));

const loadFunction = () => {

}

const ArticleDetails = () => {
    const classes = useStyles();

    return (
        <div className="article-builder">
          <head>
          <script data-ad-client="ca-pub-6274677582793346" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          </head>
            <link rel="preconnect" href="https://fonts.gstatic.com"></link>
            <link href="https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
            <Typography className={classes.title} variant="h3" component="h2">Felix’s Week 12 Newsletter: This is when things get tough.</Typography>
            <div style={{display: "flex", justifyContent: "space-between", width: "83%"}}>
              <Typography className={classes.name} variant="h5" component="h2">Akash Patel</Typography>
              <img src={Felix}/>
              <TwitterIcon style={{marginLeft: "50%"}}/>
              <InstagramIcon/>
              <FacebookIcon/>
            </div>
            <Typography className={classes.date} variant="h5" component="h2">March 28, 2021</Typography>
            <div>
              <img src={image1}/>
              <Typography className={classes.text} variant="h3" component="h2">Jalen Hurts named starting QB for the Eagles</Typography>
              <Typography className={classes.subText} variant="h5" component="h2">It’s notable that in Jalen Hurts’
               12 pass attempts, not one was a target to an RB. Miles Sanders’ usage was already spilling and
                could take a turn for the worse without targets. The sample size was too small to say anything
                 is certain, but the offense moved a lot better with Hurts under center. Against the Saints,
                  he can be risky but offers value due to his rushing upside.</Typography>
            </div>


        </div>
    );

}

export default ArticleDetails;