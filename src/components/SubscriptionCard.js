import React from 'react';
import '../App.css';
import { Card, Typography, Grid, CardContent, Button } from '@material-ui/core';

function SubscriptionCard({title, amount, timeline, offer1, offer2, offer3, special}) {
  return (
    <>
      <Card className='card' elevation={10}>
        <CardContent>
          <div  className='grid-card'>
            <div className='price-title'>
              <Typography variant="h6">{title}</Typography>
              <Typography variant="h3">{amount}</Typography>
              <Typography variant="subtitle1">{timeline}</Typography>
            </div>
            <Grid container className='price-list' direction="column" justify="center" alignItems="center">
              <Typography variant="h6" className="special">{special}</Typography>
              <Typography variant="body2">{offer1}</Typography>
              <Typography variant="body2">{offer2}</Typography>
              <Typography variant="body2">{offer3}</Typography>
            </Grid>
            <div className='price-button'>
              <Button variant="contained" color="secondary">GET STARTED</Button>
            </div>
          </div>
          
        </CardContent>
      </Card>
    </>
  );
}

export default SubscriptionCard;
