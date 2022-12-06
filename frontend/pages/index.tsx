import FormContainer from "../components/FormContainer";
import {Grid, InputLabel, MenuItem,  Typography} from "@mui/material";
import {Input, Select, Option} from "@material-tailwind/react";

export default function Home() {
    return (
        <FormContainer>
            <Grid xs={12} mt={5}>
                <form>
                    <Grid>
                        <div className="flex w-72 flex-col gap-4">
                            <Input variant="outlined" label="Возраст"/>
                        </div>
                    </Grid>
                    <Grid mt={3}>
                        <div className="w-72">
                            <Select className='color["#263238"]'
                                label="Выберите пол"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >
                                <Option>Мужской</Option>
                            </Select>
                        </div>
                    </Grid>
                    <Grid mt={3}>
                        <div className="w-72">
                            <Select
                                label="Студент"
                                animate={{
                                    mount: { y: 0 },
                                    unmount: { y: 25 },
                                }}
                            >
                                <Option>Да</Option>
                            </Select>
                        </div>
                    </Grid>
                    <Grid mt={3}>
                        <div className="flex w-72 flex-col gap-4">
                            <Input variant="outlined" label="Университет"/>
                        </div>
                    </Grid>
                </form>
            </Grid>
        </FormContainer>
    )
}
