import {Input} from "@material-tailwind/react";

const Breakfast = () => {
  return(
      <div className="flex w-72 flex-col gap-4">
          <Input color="blue" label="Input Blue" />
          <Input color="purple" label="Input Purple" />
          <Input color="indigo" label="Input Indigo" />
          <Input color="teal" label="Input Teal" />
      </div>
  )
}

export default Breakfast