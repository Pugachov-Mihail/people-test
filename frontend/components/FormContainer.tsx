import {Button, Container, Grid, Typography} from "@mui/material";
import Link from "next/link";
import React from "react";

interface FormContainer {
    children: React.ReactNode;
}

const FormContainer: React.FC<FormContainer> = ({children}) => {

    return (<Container fixed sx={{
        background: "rgb(199 210 254)",
        width: "40%",
        marginTop: "5%",
        borderRadius: 5
    }}>
        <Grid container sx={{
            paddingTop: "10%",
            marginLeft: "25%",
            paddingBottom: "5%"
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
            <Grid sx={{
                marginTop: 10,
                marginLeft: 30
            }}>
                <Button sx={{
                    background: 'rgb(79 70 229)',
                    color: 'white',
                    '&: hover': {
                        background: 'rgb(55 48 163)',
                    }
                }}>
                    <Link href={"/breakfast"}>
                        Дальше
                    </Link>
                </Button>
            </Grid>
            <Grid sx={{
                marginTop: 10,
                marginLeft: 30
            }}>
                <Button sx={{
                    background: 'rgb(79 70 229)',
                    color: 'white',
                    '&: hover': {
                        background: 'rgb(55 48 163)',
                    }
                }}>
                    <Link href={"/"}>
                        Назад
                    </Link>
                </Button>
            </Grid>
        </Grid>
    </Container>)
}

export default FormContainer;