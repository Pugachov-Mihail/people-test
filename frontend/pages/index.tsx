import FormContainer from "../components/FormContainer";
import {Grid, Input, InputLabel, MenuItem, Select, Typography} from "@mui/material";

export default function Home() {
    return (
        <FormContainer>
            <Grid xs={12} mt={5}>
                <form>
                    <Grid>
                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginBottom: 2
                        }}>
                            Возраст
                        </Typography>
                        <Input placeholder={"Возраст"}/>
                    </Grid>
                    <Grid mt={3}>
                        <InputLabel id='gender'>
                            Выберите пол
                        </InputLabel>
                        <Select labelId="gender"
                                sx={{
                                    width: "10%"
                                }}>
                            <MenuItem>Мужской</MenuItem>
                        </Select>
                    </Grid>
                    <Grid mt={3}>
                        <InputLabel id='gender'>
                            Студент
                        </InputLabel>
                        <Select
                            labelId="gender"
                            sx={{
                                width: "10%"
                            }}>
                            <MenuItem>Студент</MenuItem>
                        </Select>
                    </Grid>
                    <Grid mt={3}>
                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 18,
                            marginBottom: 2
                        }}>
                            Название университета
                        </Typography>
                        <Input placeholder={"Университет"}/>
                    </Grid>
                </form>
            </Grid>
        </FormContainer>
    )
}
