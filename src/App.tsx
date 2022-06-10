import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid, GridItem } from './components/Grid';
import styled from 'styled-components';
import  CircularFloatProgress  from './components/Progress/CircularFloatProgress';
import { ProgressBar } from './components/Progress/ProgressBar';



const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.light.bg};
`


const Button = styled.button`
  width: 100px;
  height: 30px;
  background: ${props => props.theme.dark.bg};
  color: ${props => props.theme.light.bg};
`

function App() {

  const themes = {
    light: {
      bg: 'white'
    },
    dark: {
      bg: 'black'
    }

  }

  const [theme, setTheme] = useState<any>(themes);

  function changeTheme() {
    switch (sessionStorage.getItem('actual-theme')) {
      case 'light':
        setTheme(themes)
        sessionStorage.setItem('actual-theme', 'dark')
        break;
      case 'dark':
        const darkTheme = {light: themes.dark, dark: themes.light}
        setTheme(darkTheme)
        sessionStorage.setItem('actual-theme', 'light')
        break;
      default:
        setTheme(themes);
        sessionStorage.setItem('actual-theme', 'light')
        break;
    }
  }

  // useEffect(() => {
  //   changeTheme();
  // }, [])


  const [progress,setProgress] = useState(0);

  useEffect(() => {
    setTimeout(()=>{
      if(progress < 100){
        const num = (progress + 10) < 100 ? progress + 1 : 100
        setProgress(num)
      }
    }, 3000)
  },[progress])

  return (

    <ThemeProvider theme={theme}>
      <Container>
        <Grid>
          <GridItem justify='center' align='center' style={{padding: '0 5px'}}>
            <ProgressBar width='50%' height='50px' up clr={'#000'} mode={'middle'} progress={100} />
          </GridItem>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
