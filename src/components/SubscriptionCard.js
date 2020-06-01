import React from 'react';
import '../App.css';
import { Card, Typography, Grid, CardContent, Button } from '@material-ui/core';

function SubscriptionCard({title, amount, timeline, offer1, offer2, offer3, special}) {
  return (
    <>
      <Card className='card' elevation={10}>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="h3">{amount}</Typography>
          <Typography variant="subtitle1">{timeline}</Typography>
          <Grid className='list' direction="column" container>
            <Typography variant="h6" className="special">{special}</Typography>
            <Typography variant="caption">{offer1}</Typography>
            <Typography variant="caption">{offer2}</Typography>
            <Typography variant="caption">{offer3}</Typography>
            <Button variant="contained" color="secondary">GET STARTED</Button>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default SubscriptionCard;
