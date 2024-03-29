import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";

const MainContent = () => {
  return (
    <>
      <Grid container style={{background:"green"}}>
        <Grid xs={6} >
          <div>
            <h2> الصلاةtarikh</h2>
            <h1>مدينة</h1>
          </div>
        </Grid>
        <Grid xs={6}>
          <div>
            <h2> motabaqi hata salat</h2>
            <h1>1:23:34</h1>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default MainContent