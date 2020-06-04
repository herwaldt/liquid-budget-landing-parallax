import React from 'react';
import './App.css';
import { Button, Grid } from '@material-ui/core';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { useSpring, animated } from 'react-spring';

import WaterIcon from './components/images/waterdrop.png';
import Waves from './components/images/waves.png';
import SubscriptionCard from './components/SubscriptionCard';
import AppleStore from './components/images/apple-app-store.svg';
import GoogleStore from './components/images/google-play-badge.png';

const storeLogos = [AppleStore, GoogleStore];
const mobileWidth = window.innerWidth < 700 ? true : false;
const mobileHeight = window.innerHeight > 750 ? true : false;
const mobileShift = mobileWidth ? 125 : 0;

const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`;

const calcCard = (x, y) => [-(y - window.innerHeight / 2) / 60, (x % Math.floor(window.innerWidth / 300)), 1];
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 50 + (window.innerWidth/10) - mobileShift}px,${-window.innerHeight/5}px,0)`;
const trans2 = (x, y) => `translate3d(${x / 25 + 400 - mobileShift}px,${y / 7 + (window.innerHeight/1.5)}px,0)`;
const trans3 = (x, y) => `translate3d(${x / 25 + 200 - mobileShift}px,${y / 5 +(window.innerHeight/2)}px,0)`;
const trans4 = (x, y) => `translate3d(${x / 30 + 500 - mobileShift}px,${y / 6.5+(window.innerHeight/2.2)}px,0)`;
const trans5 = (x, y) => `translate3d(${x / 25.5 + 800 - mobileShift}px,${y / 8+(window.innerHeight/1.3)}px,0)`;

function App() {
  const [propsCard1, setCard1] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [propsCard2, setCard2] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [propsCard3, setCard3] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }));
  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })

  let pages = 3;
  if (mobileWidth & mobileHeight) {
    pages = 4
  } else if ( mobileWidth ) {
    pages = 4.5
  }

  return (
    <Parallax pages={pages}>
      
      <div className='app'>
        <Grid container direction='column'>
        <div className='first-page' onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        
          <div className='landing-text'>
            <ParallaxLayer>
              <h1>Liquid Budget</h1>
              <div className='paragraphs'>
                <h3>You Can Not Manage What You Do Not Measure.</h3>
                <p>Start budgetting today, and keep your money liquid.</p>
              </div>
              <Button className='try-button' variant="contained" color="secondary">
                Try Free
              </Button>
            </ParallaxLayer>
          </div>
        
          <div >
            <ParallaxLayer offset={0} speed={-1.2} className='waterdrop-container'>
              <img className='waterdrop' src={WaterIcon} alt='logo' />
            </ParallaxLayer>
            <div className="parallax-container">
              <animated.div className="cloud" style={{ transform: props.xy.interpolate(trans1) }} />
              <ParallaxLayer offset={0} speed={-0.25}>
                <animated.div className="small-drop" style={{ transform: props.xy.interpolate(trans2) }} />
                <animated.div className="small-drop" style={{ transform: props.xy.interpolate(trans3) }} />
                <animated.div className="small-drop" style={{ transform: props.xy.interpolate(trans4) }} />
                <animated.div className="small-drop" style={{ transform: props.xy.interpolate(trans5) }} />
              </ParallaxLayer>
            </div>
          </div>
        
        </div>
      
        <div className='second-page'>
          <Grid
            className='costCards'
            container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
            <animated.div
              className='cardtest'
              onMouseMove={({ clientX: x, clientY: y }) => setCard1({ xys: calcCard(x, y) })}
              onMouseLeave={() => setCard1({ xys: [0, 0, 1] })}
              style={{ transform: propsCard1.xys.interpolate(trans) }}
            >
              <SubscriptionCard
                title='FREE'
                amount='$0'
                timeline='per month'
                offer1='One bank account'
                offer2='One user login'
                offer3='One month anyalytics'
              />
            </ animated.div>
            <animated.div
              className='cardtest'
              onMouseMove={({ clientX: x, clientY: y }) => setCard2({ xys: calcCard(x, y) })}
              onMouseLeave={() => setCard2({ xys: [0, 0, 1] })}
              style={{ transform: propsCard2.xys.interpolate(trans) }}
            >
              <SubscriptionCard
                title='BASIC'
                amount='$4.99'
                timeline='per month'
                offer1='Unlimited bank account'
                offer2='Three user logins'
                offer3='One year anyalytics'
              />
            </animated.div>
            <animated.div
              className='cardtest'
              onMouseMove={({ clientX: x, clientY: y }) => setCard3({ xys: calcCard(x, y) })}
              onMouseLeave={() => setCard3({ xys: [0, 0, 1] })}
              style={{ transform: propsCard3.xys.interpolate(trans) }}
            >
              <SubscriptionCard
                title='ANNUAL'
                amount='$39.99'
                timeline='per year'
                offer1='Unlimited bank account'
                offer2='Three user logins'
                offer3='One year anyalytics'
                special='33.3% discount'
              />
            </animated.div>
          </Grid>
        </div>

        <div>
          <Parallax speed={0} zIndex={1}>
            <img className='waves' src={Waves} alt='waves' />
            <div className='third-page'>
              <Grid>
                <h2>Start Saving Today Below</h2>
                <Grid
                  container
                  direction='row'
                  className='bottom-grid'
                >
                {
                  storeLogos.map(i => (
                    <animated.div
                      key={i}
                      style={{ transform: radians.interpolate(interp(storeLogos.indexOf(i)+1)) }}
                    >
                      <a onClick={console.log('click')}>
                        <img className='logo' src={i} alt={i} />
                      </a>
                    </animated.div>
                  ))
                }
                </Grid>
              </Grid>
            </div>
          </Parallax>
        </div>

        </Grid>
      </div>
    </Parallax>
  );
}

export default App;
