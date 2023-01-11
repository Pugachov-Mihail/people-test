import {Box, Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

interface FormContainer {
    children: React.ReactNode;
}

const FormContainer: React.FC<FormContainer> = ({children}) => {

    return (<Container sx={{
        background: "white",
        boxShadow: "0px 0px 6px -1px rgba(0, 0, 0, 1)",
        marginTop: "5%",
        borderRadius: 5,
        width: "90%"
    }}>
        <Grid container sx={{
            paddingTop: "5%",
            paddingBottom: "5%",
        }}>
            <Grid xs={12}>
                <Typography sx={{
                    fontSize: 22,
                    fontWeight: "bold"
                }}>
                    Введите свои данные:
                </Typography>
            </Grid>
            {children}
           <Grid xs={9}>
               <Box mt={3}>
                   <div className="flex">
                       <Grid>
                           <Button sx={{
                               background: '#7cb342',
                               color: 'black',
                               boxShadow: "0px 0px 6px -1px rgba(0, 0, 0, 1)",
                               '&: hover': {
                                   background: '#7cb342',
                                   color: 'white'
                               }
                           }}>
                               <Link href={"/"}>
                                   Назад
                               </Link>
                           </Button>
                       </Grid>
                       <Grid sx={{
                           marginLeft: "20%"
                       }}>
                           <Button sx={{
                               color: 'black',
                               boxShadow: "0px 0px 6px -1px rgba(0, 0, 0, 1)",
                               '&: hover': {
                                   background: '#7cb342',
                                   color: 'white',
                               }
                           }}>
                               <Link href={"/breakfast"}>
                                   Дальше
                               </Link>
                           </Button>
                       </Grid>
                   </div>
               </Box>
           </Grid>
        </Grid>
    </Container>)
}

export default FormContainer;