import {Grid, Typography} from "@mui/material";
import styles from "../styles/Other.module.css";
import {Input} from "@material-tailwind/react";
import React from "react";

const TimeInput = () => {
    return(
        <Grid container>
            <Grid mt={2} xs={8}>
               <Grid mt={2} pb={2}>
                   <Typography  sx={{
                       fontSize: "18px"
                   }}>
                       Укажите количество потребляемой воды, в миллилитрах
                   </Typography>
               </Grid>
                <Input placeholder="200"></Input>
            </Grid>
           <Grid xs={12}>
               <Typography mt={2} sx={{
                   fontSize: 20
               }}>
                   Укажите время принятия пищи?
               </Typography>
               <Grid mt={2} xs={8}>
                   <input type="time" className={styles.time}/>
               </Grid>
           </Grid>
        </Grid>
    )
}

export default TimeInput