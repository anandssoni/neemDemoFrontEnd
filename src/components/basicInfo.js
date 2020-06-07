import React  from "react";


import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
const useStyles = makeStyles((theme) => ({
  
  
  
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));
 
const BasicInfo=(props)=>{

    const {node}=props.basicData;

    console.log("basicData",node)
    const classes = useStyles();
    return(
        <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
        
            <Grid item  xs={12} sm={12} md={12}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={node.mainImage.asset.fluid.src}
                  title="Image title"
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {node.name}
                  </Typography>
                  <Typography>
                   {node.email}
                  </Typography>
                  <Typography>
                   {node.phone}
                  </Typography>
                  <Typography>
                   {node.dob}
                  </Typography>
              
                </CardContent>
               
              </Card>
            </Grid>
          
        </Grid>
      </Container>
   
    )
}

export default BasicInfo;