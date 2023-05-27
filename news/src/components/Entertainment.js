import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Margin } from '@mui/icons-material';
import Navbar from './Navbar';
function Entertainment() {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        // const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=c2589ed6562540219cf479532d3944a71`; 
        const getart = async () => {
            //const response= await axios.get(url)
            const response = await axios.get(`https://newsapi.org/v2/everything?q=entertainment&apiKey=6d5f46517dde49bab76fb3220cad5338`)
            console.log(response)
            setArticles(response.data.articles)

        }
        getart()

    }, [])
    return (
        <>
        <Navbar/>
      
        <div>
            <Grid container spacing={2} sx={{mt:'6rem',pl:12}}>
                {
                    articles.map((curNews) => {
                        return (
                            <>
                                <Grid item md={4}  justifyContent="center" alignItems="center">
                                    <Card sx={{ maxWidth: 345, maxHeight: 345,padding:'3px' }} >
                                        <CardMedia
                                            component="img"
                                            alt="Loading...."
                                            height="140"
                                            image={curNews.urlToImage}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div">
                                                {curNews.title.slice(0, 60)}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {curNews.description.slice(0, 80)}...
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button variant="contained" href={curNews.url} size='small'  disableElevation>
                                                Read More
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>

                        )
                    })
                }
            </Grid>
        </div>
        </>
    )
}

export default Entertainment
