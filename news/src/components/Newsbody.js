import { Title } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Newsbody = () => {
    const [News, setNews] = useState([]);
    const getNews = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1/posts');
            setNews(await response.json());
            console.log(News)
        } catch (error) {
            console.log("my error is " + error);
        }
       

    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <>
            <Grid container>
            {
                News.map((curNews)=>{
                    return(
                        <>
                        <Grid item md={4}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
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
