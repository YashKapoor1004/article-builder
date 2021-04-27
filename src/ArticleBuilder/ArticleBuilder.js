import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
  head: {
    textAlign: "left",
    marginTop: '1%',
    marginLeft: '1%',
    marginBottom: '2%',
    maxWidth: "30%",
  },
  textField: {
      width: "90%",
      marginBottom: "3%"
  },
  textFieldHalf: {
    width: "45%",
    marginBottom: "3%"
},
  form:{
      display: "flex",
      justifyContent:"space-between",
      width: "50%",
      marginLeft: "5%",
  },
  formSplit:{
    display: "flex",
    justifyContent:"space-between",
    width: "90%",
    marginLeft: "5%"
},
  upload:{
    marginBottom: "2%",
    marginLeft: "5%"
  },
  input: {
    display: 'none',
  },
  topDiv:{
    display: "flex",
    width: "90%",
    marginLeft: "5%",
    justifyContent: "space-between"
  }
}));

const RenderProductOptions = (inputNum) => {
  const classes = useStyles();
  const items = []
  for (var i = 0; i < inputNum ; i++){
    items.push("inputNum");
  }
  return items.map((item, index) => {
      return <form key={index}>     
        <input
      accept="image/*"
      className={classes.input}
      id="contained-button-file"
      multiple
      type="file"
    />
    <label htmlFor="contained-button-file">
      <Button variant="contained" color="primary" component="span">
        Upload Image
      </Button>
    </label> 
    <br></br>
    <br></br>

  <TextField 
    required
    id="filled-basic"
    label="Subtitle"
    variant="filled"
    className={classes.textField} 
    />
    <TextField 
    required
    id="filled-basic"
    label="Description"
    variant="filled"
    multiline
    rows={4}
    className={classes.textField}
     />
    </form>;
  });
}


const ArticleBuilder = () => {
    const classes = useStyles();
    const [inputNum, setInputNum] = useState(1);

    return (
        <div className="article-builder">
            <div className={classes.topDiv}>
              <Typography className={classes.head} variant="h3" component="h2">Article Builder</Typography>
              <Button variant="contained" style={{background:"#4DD9FF", height: "100%", marginTop: "2%", marginLeft: "40%"}} onClick={() => setInputNum(inputNum+1)}>Add Section</Button>
              <Button variant="contained" style={{ height: "100%", marginTop: "2%"}} color="secondary" onClick={() => setInputNum(inputNum-1)}>Delete Section</Button>
            </div>
            <Typography className={classes.head} variant="h5" component="h2">Personal Info</Typography>
            <form className={classes.form}>
            <TextField 
                  required
                  id="filled-basic"
                  label="Full Name"
                  variant="filled"
                   />
                   <TextField 
                  id="filled-basic"
                  label="Twitter URL"
                  variant="filled"
                   />
                   <TextField 
                  id="filled-basic"
                  label="Facebook URL"
                  variant="filled"
                   />
            </form>
            <Typography className={classes.head} variant="h5" component="h2">Article Info</Typography>
            <form className={classes.formSplit}>
            <TextField 
                  required
                  id="filled-basic"
                  label="Title"
                  variant="filled"
                  className={classes.textFieldHalf} />
                  <TextField 
                  required
                  id="date"
                  type="date"
                  label="Date"
                  variant="filled"
                  className={classes.textFieldHalf}
                  InputLabelProps={{
                    shrink: true,
                  }} />
                  </form>

                    {RenderProductOptions(inputNum)}

                  <Button 
                  variant="contained" 
                  color="primary" 
                  type="submit"
                  style={{
                    width: "90%",
                    marginBottom: "2%",
                    height: 50
                  }}>Submit</Button>



        </div>
    );

}

export default ArticleBuilder;