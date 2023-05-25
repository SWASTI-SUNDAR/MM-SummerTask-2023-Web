import { Title } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import axios from 'axios'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
const Newsbody = (props) => {
    const [articles, setArticles] = useState([]);
    // const [name,setName]=useState('sports');
    const getNews = async () => {
        const url=`https://newsapi.org/v2/everything?q=${props.names}&apiKey=c2589ed6562540219cf479532d3944a7`
        const response = await axios.get(url)
        // console.log(response);
        setArticles(response.data.articles);
         console.log(props.names);
        console.log(url);
    }
    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <Grid container>
                {
                    articles.map((curNews) => {
                        return (
                            <>
                                <Grid item md={4} marginLeft="2rem">
                                    <Card sx={{ maxWidth: 345 }}>
                                        <CardMedia
                                            component="img"
                                            alt="green iguana"
                                            height="140"
                                            image={curNews.urlToImage}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {curNews.title}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {curNews.body}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Read More</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </>
                        )
                    })
                }
            </Grid>
        </>
    )
}

export default Newsbody
