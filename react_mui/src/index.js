import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import ResponsiveAppBar from "./component/Navbar";
import SimpleBottomNavigation from "./component/Bottomnav";
import { Container } from '@mui/system';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import BasicAlerts from './component/Alerts';
// import { Grid } from '@mui/material';
//import CustomCard from './component/CustomCard';

// import { Grid } from '@mui/material';
     //style={{fontWeight:'bold',size:'200px'}}
import { CardsLayout } from './component/CardsLayout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Container>
      <ResponsiveAppBar/>
     <Container>
      <BasicAlerts></BasicAlerts>
      
      
      </Container>
      
      <Container ><h1  style= {{ fontSize: 100 ,textAlign:'center'}}>
   
        The React Framework for Production </h1>
     
          </Container>
      <Container >
          <p style={{textAlign:'center' }}>    Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ex nesciunt excepturi dicta libero enim numquam sed ipsam blanditiis reiciendis. Debitis, sapiente commodi? Suscipit quam repellat, voluptatem cumque modi eaque?</p>
          </Container>
      
    <Container style={{marginTop:50}}>
    <Stack spacing={5} direction="row" style={{justifyContent: 'center'}}>
 
 <Button variant="contained" style={{width:'200px'}}>Start Learning</Button>
    <Button variant="outlined" style={{width:'200px'}}>Docemtation</Button>

</Stack>

    </Container>


<Container style={{marginTop:40}}>
  <Stack spacing={5} direction="row" style={{justifyContent: 'center'}}>
    <Button  style={{color:'#484848'}}
      component={this}
        to="/url"> 
        License: MIT
    </Button>
    <Button 
	    component={this}
      to="/url"> 
      GitHub
    </Button>

  </Stack>
    </Container>

    <Container style= {{marginTop:100, marginBottom:40,textAlign:'center'}}>
      <h1> The Web SDK </h1>
    <p>Next.js has all the tools you need to make the Web. Faster.</p>
     </Container>

<CardsLayout></CardsLayout>

<p style={{textAlign:'center'}}><b>Add more:</b> Support for 
<a href="ok" style={{textDecoration: 'none'}}> enviroment varaible</a> ,
<a href="ok" style={{textDecoration: 'none'}}> preview mode</a> ,
<a href="ok" style={{textDecoration: 'none'}}> custom head tags</a> ,
<a href="ok" style={{textDecoration: 'none'}}> automatic</a> ,
<a href="ok" style={{textDecoration: 'none'}}> enviroment</a>  and more.
</p>
    


      <SimpleBottomNavigation/>
      </Container>


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
