import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import {Input} from "@material-tailwind/react";

interface Drink{
    name: string
   // value: boolean
}
interface ComponentDrink {
    drinks: Drink[]
}

const Drink = ({drinks, text}:any) => {
  return(
      <Box sx={{
          background: "#FAFAFA",
          marginTop: "2%",
          borderRadius: 2,
          width: "90%",
          paddingLeft: "3%",
      }}>
          <Grid container mt={2}>
              <Grid mt={1} mb={1}>
                  <Typography sx={{
                      fontSize: "18px"
                  }}>
                      {text}
                  </Typography>
              </Grid>
              {
                  drinks.map(item=>(<>
                          <Grid xs={1}>
                              <input type='checkbox'/>
                          </Grid>
                          <Grid xs={11}>
                              <Typography>{item.name}</Typography>
                          </Grid>
                      </>))
              }
          </Grid>
      </Box>
  )
}

export default Drink;