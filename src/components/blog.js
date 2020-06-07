import React from "react";

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import {Link} from "gatsby"




const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
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


 const Blogs=(props)=> {
  const classes = useStyles();
  
  const {categories}=props

  console.log("categories",categories)
  return (
    <Container className={classes.cardGrid} maxWidth="md">
    {/* End hero unit */}
    <Grid container spacing={4}>
      {categories && categories.length && categories.map((cat_data,index) => (
        <Grid item key={index} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={cat_data.image.asset.fluid.src}
              title="Image title"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {cat_data.title}
              </Typography>
              <Typography>
                {
                    cat_data.description
                }
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
              <Link to={cat_data.slug.current}>
              View
              </Link>
                
              </Button>
              
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>

  );
}
export default Blogs

