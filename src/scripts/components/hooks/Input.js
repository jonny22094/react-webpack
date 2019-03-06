//@flow
import {useState} from 'react'

type InputFields = {
  name: string,
  type: string,
  value: string,
  onChange: Function
}

type args = {
  name?: string,
  type?: string,
  placeholder?: string,
  initialValue?: string
}

export const Input = ({
  name = '',
  type = 'text',
  placeholder = '',
  initialValue = ''
}: args): InputFields => {
  const [value, setValue] = useState(initialValue)

  function handleChange(e: SyntheticInputEvent<HTMLInputElement> | string): void {
    const newValue = typeof e === 'string' ? e : e.target.value

    setValue(newValue)
  } 

  return {
    value,
    name,
    type,
    placeholder,
    onChange: handleChange
  }
}