import * as React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  Input: React.FC
}

const FormGroup: React.FC<Props> = ({Input,label, ...props}) => {

  const id = React.useId()

  return (
    <div className="flex items-center justify-between flex-wrap mb-8">
      <label htmlFor={id}>
        {label}
      </label>
      <Input id={id} {...props} />
    </div>
  )
}

export default FormGroup;