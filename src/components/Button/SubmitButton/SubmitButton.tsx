'use client'

import { useFormStatus } from 'react-dom'
import { Spin } from 'antd'

import Button, { ButtonProps } from '../Button'

type SubmitButtonProps = ButtonProps & {
  text: string
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text, ...props }) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} {...props}>
      {!pending ? (
        text
      ) : (
        <p>
          <Spin /> Loading...
        </p>
      )}
    </Button>
  )
}

export default SubmitButton
