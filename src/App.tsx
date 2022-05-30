import React from 'react';
import { Grid, GridItem } from './components/Grid';


function App() {
  return (
    <div id="container">
      <Grid>
        <GridItem cols={3} rows={2}></GridItem>
      </Grid>
    </div>
  );
}

export default App;
