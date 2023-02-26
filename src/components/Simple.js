import React from 'react'
import {Card, CardContent, Typography   } from '@mui/material';



const Simple = ({ state}) => {

    const { products} = state;

    return (
        <div>
            {
                products.map((prod) => {
                    return (
                        
                        <Card sx={{ margin: 5, padding:3, border: '3px solid red',borderRadius:10,backgroundColor:'lightslategray',color:'white' }} key={prod.id}>
                           <CardContent>
                           <Typography gutterBottom>ID : {prod.id}</Typography>
                            <Typography >userID : {prod.userId}</Typography>
                            <Typography >Title : {prod.title}</Typography>
                            <Typography > Body : 
                                <b sx={{fontSize:14}}> {prod.body}</b>
                            </Typography>
                            <Typography >Tags : {prod.tags} </Typography>
                            <Typography >Reactions : {prod.reactions}</Typography>
                           </CardContent>
                        </Card>
                      
                    )
                })
            }

        </div>
    );
}

export default Simple
