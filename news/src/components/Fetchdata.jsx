import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Fetchdata({ cat }) {
    const [data, setData] = useState([])

    const getart = async () => {
        const res = await axios.get(cat ? `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=c2589ed6562540219cf479532d3944a7`
            : `https://newsapi.org/v2/top-headlines?country=in&apiKey=c2589ed6562540219cf479532d3944a7`)
        console.log(res)
        setData(res.data.articles)
    }
    useEffect(() => {
        getart();
    }, [cat])
    return (
        <>
        <Grid container  marginTop={10} >
                {
                    data.map((curNews) => {
                        return (
                            <>
                            <Grid container md={4} sx={12} marginTop="5rem"  margin="auto" padding="auto" spacing={2}  justifyContent="center">
                                <Card sx={{ maxWidth: 339 }} style={{padding:".5rem",marginTop:".5rem",border:"1px solid"}}>
                                    <CardMedia
                                        sx={{ height: 140 }}
                                        image={curNews.urlToImage ? curNews.urlToImage : ("oh `no! image not found") }
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {curNews.title ? curNews.title.slice(0, 50)
                                                : ("")}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {curNews.description ? (
                                                curNews.description.slice(0, 80)
                                            ) : ("")}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" href={curNews.url} target='blank'>Read More</Button>
                                        <Typography marginLeft="auto" display="flex">
                                        <Typography>
                                        {curNews.author ? curNews.author.slice(0,10):("")}
                                        </Typography>
                                        <AccountCircleIcon></AccountCircleIcon>
                                        </Typography>
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

export default Fetchdata
