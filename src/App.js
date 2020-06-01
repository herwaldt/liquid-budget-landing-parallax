import React from 'react';
import './App.css';
import { Button, Card, Typography, Grid, CardContent } from '@material-ui/core';
import Parallax from 'react-rellax';

import WaterIcon from './components/images/waterdrop.png';
import Waves from './components/images/waves.png';
import SubscriptionCard from './components/SubscriptionCard';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <div className='left-side'>
        <Parallax speed={3}>
          <h1>Liquid Budget</h1>
          <div className='paragraphs'>
            <h3>You Can Not Manage What You Do Not Measure.</h3>
            <p>Start budgetting today, and keep your money liquid.</p>
          </div>
          <Button variant="contained" color="secondary">
            Try Free
          </Button>
          </Parallax>
        </div>
        
        <div >
          <Parallax speed={-10}>
            <img className='waterdrop' src={WaterIcon} alt='logo' />
          </Parallax>
        </div>
      </div>

      <div className='red-section'>
        <h2>Hope You Enjoy!</h2>
        <Grid
          className='costCards'
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          >
          <SubscriptionCard
            title='FREE'
            amount='$0'
            timeline='per month'
            offer1='One bank account'
            offer2='One user login'
            offer3='One month anyalytics'
          />
          <SubscriptionCard
            title='BASIC'
            amount='$4.99'
            timeline='per month'
            offer1='Unlimited bank account'
            offer2='Three user logins'
            offer3='One year anyalytics'
          />
          <SubscriptionCard
            title='ANNUAL'
            amount='$39.99'
            timeline='per year'
            special='33.3% discount'
          />
        </Grid>
      </div>

      <div>
        <Parallax speed={0} zIndex={1}>
          <img className='waves' src={Waves} alt='waves' />
          <div className='blue-section'>
            <h2>Hope You Enjoy!</h2>
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
