import React ,{useState} from "react";
import {graphql} from 'gatsby'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import BasicInfo from '../components/basicInfo'

import Blogs from '../components/blog'





const useStyles = makeStyles((theme) => ({
 
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  }
}));



 const Home=({data})=> {
  const classes = useStyles();
  const [basicInfoBtn, setBasicInfoBtn] = useState(true);
  console.log("data",data)
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
     
          <Typography variant="h6" color="inherit" noWrap>
            PortFolio
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {data && data.allSanityPost &&
              data.allSanityPost.edges &&
              data.allSanityPost.edges[0] &&
              data.allSanityPost.edges[0].node &&
              data.allSanityPost.edges[0].node.name ?
              data.allSanityPost.edges[0].node.name : ""
              }
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant={basicInfoBtn ? 'contained' : 'outlined'}
                  onClick={()=>{
                    setBasicInfoBtn(true)
                  }}
                  color="primary">
                    Basic Info
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant={basicInfoBtn ? 'outlined' : 'contained'}
                  onClick={()=>{
                    setBasicInfoBtn(false)
                  }}
                  color="primary">
                    Blogs
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        {basicInfoBtn ? 
      <BasicInfo 
      basicData={
        data.allSanityPost.edges[0]
      }
      /> : 
<Blogs
categories={
  data.allSanityPost.edges[0].node.categories
}
/>
      }





    </main>
   
    </React.Fragment>
  );
}
export default Home

export const data = graphql`
query MyQuery {
  allSanityPost {
    edges {
      node {
        categories {
          description
          slug {
            current
          }
          title
          image {
            asset {
              fluid {
                src
              }
            }
          }
        }
        dob
        email
        name
        phone
        mainImage {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
}

`