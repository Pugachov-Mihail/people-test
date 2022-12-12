import FormContainer from "../components/FormContainer";
import {Grid} from "@mui/material";
import {Input, Select, Option, Typography} from "@material-tailwind/react";
import {useState} from "react";


export default function Home() {
    const [student, setStudent] = useState(false);
    const [ill, setIll] = useState(false);
    const [allergi, setAllergi] = useState(false);
    const [diete, setDiete] = useState(false);

    const dieteValue = (event: number) => {
        if (event === 1) {
            setDiete(true)
        } else {
            setDiete(false)
        }
    }

    const studentValue = (event: number) => {
        if (event === 1) {
            setStudent(true)
        } else {
            setStudent(false)
        }
    }

    const allergiValue = (event: number) => {
        if (event === 1) {
            setAllergi(true)
        } else {
            setAllergi(false)
        }
    }
    const illValue = (event: number) => {
        if (event === 1) {
            setIll(true)
        } else {
            setIll(false)
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
                                <Option onClick={() => studentValue(1)}>Да</Option>
                                <Option onClick={() => studentValue(0)}>Нет</Option>
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
                    <Grid mt={2}>
                        <div className="flex w-72 flex-col gap-4">
                            <Typography>Имеются ли у Вас хронические заболевания? Если да, то какие?</Typography>
                            <div className="w-72">
                                <Select color="teal" label="Выберите вариант">
                                    <Option onClick={() => illValue(1)}>Да</Option>
                                    <Option onClick={() => illValue(0)}>Нет</Option>
                                </Select>
                            </div>
                            {
                                ill ?
                                    (<Input variant="outlined" label="Введите какие у вас есть заболевания"/>)
                                    :
                                    null
                            }
                        </div>
                    </Grid>
                    <Grid mt={2}>
                        <div className="flex w-72 flex-col gap-4">
                            <Typography>Укажите количество перенесённых респираторных заболеваний в год</Typography>
                            <Input variant="outlined" type='number' label="Введите число"/>
                        </div>
                    </Grid>
                    <Grid mt={2}>
                        <div className="flex w-72 flex-col gap-4">
                            <Typography>Есть ли у Вас аллергии? Если да, то на что?</Typography>
                            <div className="w-72">
                                <Select color="teal" label="Выберите вариант">
                                    <Option onClick={() => allergiValue(1)}>Да</Option>
                                    <Option onClick={() => allergiValue(0)}>Нет</Option>
                                </Select>
                            </div>
                            {
                                allergi ?
                                    (<Input variant="outlined" label="Введите на что аллергия"/>)
                                    :
                                    null
                            }
                        </div>
                    </Grid>
                    <Grid mt={2}>
                        <div className="flex w-72 flex-col gap-4">
                            <Typography>Придерживаетесь ли Вы диет? Если да, то каких?</Typography>
                            <div className="w-72">
                                <Select color="teal" label="Выберите вариант">
                                    <Option onClick={() => dieteValue(1)}>Да</Option>
                                    <Option onClick={() => dieteValue(0)}>Нет</Option>
                                </Select>
                            </div>
                            {
                                diete ?
                                    (<Input variant="outlined" label="Введите какие диеты"/>)
                                    :
                                    null
                            }
                        </div>
                    </Grid>
                </form>
            </Grid>
        </FormContainer>
    )
}
