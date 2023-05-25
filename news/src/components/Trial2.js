import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function Trial2() {
    const[articles,setArticles]=useState([])
    useEffect(()=>{
    // const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c2589ed6562540219cf479532d3944a71`; 
    const getart= async ()=>{
    const response= await axios.get(`https://newsapi.org/v2/everything?q=tech&apiKey=c2589ed6562540219cf479532d3944a7`)
    //const response= await axios.get(url)
    console.log(response)
    setArticles(response.data.articles)

   }
    getart()

}, [])
  return (
    <div>
    <Grid container spacing={2}>
    {
        articles.map((curNews)=>{
            return(
                <>
                <Grid item md={4} justifyContent="center" alignItems="center">
                <Card sx={{maxWidth:345,maxHeight:345}} >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={curNews.urlToImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                           {curNews.title.slice(0,60)}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {curNews.description.slice(0,80)}...
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" href={curNews.url}>Read More</Button>
                    </CardActions>
                </Card>
            </Grid>
                </>
                
            )
        })
       

    }
    </Grid>
    </div>
  )
}

export default Trial2
