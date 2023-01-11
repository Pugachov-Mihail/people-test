import {Input} from "@material-tailwind/react";
import FormContainer from "../components/FormContainer";
import CheckBox from "../components/CheckBox";
import Question from "../components/Question";
import {Grid} from "@mui/material";
import {useState} from "react";
import Drink from "../components/Drink";

const Breakfast = () => {
    const [anyProduct, setAnyProduct] = useState(false);
    const [drinks, setDrinks] = useState([{name: "Вода"}, {name: "Молоко"}])
  return(
     <FormContainer>
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
                 <Drink drinks={drinks} text={"Выберите напитки, которые Вы употребляли на завтрак?"}/>
             </Grid>
         </Grid>
     </FormContainer>
  )
}

export default Breakfast