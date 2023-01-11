import {Input, Option, Select} from "@material-tailwind/react";
import {Grid} from "@mui/material";



const Question = ({setState, label, stateProps, inputText}:any) => {

    const func = (value: number) =>{
        if (value === 1) {
            setState(true)
        } else {
            setState(false)
        }
    }

  return(
  <>
      <Grid mt={3}>
          <div className="w-72">
              <Select color="teal" label={label}>
                  <Option onClick={() => func(1)}>Да</Option>
                  <Option onClick={() => func(0)}>Нет</Option>
              </Select>
          </div>
      </Grid>
      {
          stateProps ? (
              <Grid mt={3}>
                  <div className="flex w-72 flex-col gap-4">
                      <Input variant="outlined" label={inputText}/>
                  </div>
              </Grid>
          ) : null
      }</>
  )
}

export default Question