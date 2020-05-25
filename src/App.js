import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import { VideoList, VideoDetail, SearchBar } from './components';

// const App = () => {
//   return <h1>Hello</h1>;
// };

class App extends React.Component {
  state = {
    searchTerm: '',
  };
  render() {
    return (
      <Grid justify='center' container spacing={16}>
        <Grid item xs={12}>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* <VideoList /> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
export default App;
