import './ArticleHome.css';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import image1 from './assets/image 6.png';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Av1 from './assets/chad.png';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  media: {
    height: 150,
  },
  grid:{
      width: "100%",
      paddingTop: "4%",
      paddingLeft: "2%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author:{
      display: "flex",
  }
}));

const ArticleHome = () => {
    const classes = useStyles();

    return (
        <div className="article-home">
            <Grid className={classes.grid} container spacing={3}>
                <Grid item xs={12} sm={9} >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        style={{height: 320}}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    {/* <CardActionArea className={classes.cardActions}>
                        <Box className={classes.author}>
                            <Avatar src={Av1}/>
                        </Box>
                        <Box ml={2}>
                            <Typography gutterBottom variant="subtitle2" component="p">
                                John Doe
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" color="textSecondary" component="p">
                                April 25, 2020
                            </Typography>
                        </Box>
                    </CardActionArea> */}
                </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={2}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={7}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
                <Grid item xs={12} sm={3}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={image1}
                        title="Jalen Hurts"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Jalen Hurts Named Start QB for the Eagles
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            It’s notable that in Jalen Hurts’ 12 pass attempts,
                             not one was a target to an RB. Miles Sanders’ usage
                              was already spilling and could take a turn for the
                               worse without targets. The sample size was too small
                                to say anything is certain, but the offense moved
                                 a lot better with Hurts under center. Against the
                                  Saints, he can be risky but offers value due to his rushing upside.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                </Grid>
            </Grid>
        </div>
    );

}

export default ArticleHome;