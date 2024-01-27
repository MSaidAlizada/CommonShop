import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Item({name, price, imglink, stock}){
    
    return(
        <Card sx={{ maxWidth: 345 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
            </CardContent>
            <CardMedia
                sx={{ height: 140, width: 140, margin:"auto" }}
                image={imglink}
                title="indomie"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                <Typography>Amount left : {stock}</Typography>
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">buy</Button>
                <Typography align="right">{price} QAR</Typography>
            </CardActions>
        </Card>
    )
}