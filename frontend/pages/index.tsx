import FormContainer from "../components/FormContainer";
import {Grid} from "@mui/material";
import {Input, Select, Option} from "@material-tailwind/react";
import {useState} from "react";

export default function Home() {
    const [student, setStudent] = useState(false);


    const studentValue = (event) => {
        if (event === 1) {
            setStudent(true)
        } else {
            setStudent(false)
        }
    }

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
                            <Select color="teal" label="Выберите пол">
                                <Option>Мужской</Option>
                                <Option>Женский</Option>
                            </Select>
                        </div>
                    </Grid>
                    <Grid mt={3}>
                        <div className="w-72">
                            <Select color="teal" label="Студент">
                                <Option onClick={()=>studentValue(1)}>Да</Option>
                                <Option onClick={()=>studentValue(0)}>Нет</Option>
                            </Select>
                        </div>
                    </Grid>
                    {
                        student ? (
                            <Grid mt={3}>
                                <div className="flex w-72 flex-col gap-4">
                                    <Input variant="outlined" label="Университет"/>
                                </div>
                            </Grid>
                        ) : null
                    }
                </form>
            </Grid>
        </FormContainer>
    )
}
