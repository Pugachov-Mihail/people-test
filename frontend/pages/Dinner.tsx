import {useState} from "react";
import FormContainer from "../components/FormContainer";
import {Grid} from "@mui/material";
import CheckBox from "../components/CheckBox";
import Question from "../components/Question";
import Drink from "../components/Drink";
import TimeInput from "../components/TimeInput";

const Dinner = () => {
    const [anyProduct, setAnyProduct] = useState(false);
    const [drinks, setDrinks] = useState([{name: "Вода"}, {name: "Молоко"}])
    return(
        <FormContainer about={"Данные о ужине"} down={'/Snack'} next={'/Night'}>
            <Grid container>
                <Grid xs={12}>
                    <CheckBox/>
                </Grid>
                <Grid xs={12}>
                    <Question
                        setState={setAnyProduct}
                        label="Другие продукты?"
                        stateProps={anyProduct}
                        inputText="Укажите"
                    />
                </Grid>
                <Grid>
                    <Drink drinks={drinks} text={"Выберите напитки, которые Вы употребляли на ужин?"}/>
                </Grid>
                <Grid xs={10}>
                    <TimeInput/>
                </Grid>

            </Grid>
        </FormContainer>
    )
}

export default Dinner