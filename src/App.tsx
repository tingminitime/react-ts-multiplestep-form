import { FormEvent, useState } from 'react'
import { useMultistepForm } from './hooks/useMultistepForm'
import UserForm from './UserForm'
import AddressForm from './AddressForm'
import AccountForm from './AccountForm'

export type FormDataType = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormDataType = {
  firstName: '',
  lastName: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)

  const updateFields = (fields: Partial<FormDataType>) => {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }

  const {
    stepComponent,
    stepComponents,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    back,
    next,
  } = useMultistepForm([
    <UserForm
      {...data}
      updateFields={updateFields}
    ></UserForm>,
    <AddressForm
      {...data}
      updateFields={updateFields}
    ></AddressForm>,
    <AccountForm
      {...data}
      updateFields={updateFields}
    ></AccountForm>,
  ])

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!isLastStep) return next()
    else alert('Successful Account Creation')
  }

  return (
    <div className="relative m-4 max-w-max rounded-lg border border-white bg-slate-800 p-8">
      <form onSubmit={onSubmit}>
        <div className="absolute top-2 right-2">
          {currentStepIndex + 1} / {stepComponents.length}
        </div>
        {stepComponent}
        <div className="mt-4 flex justify-end gap-2">
          {!isFirstStep && (
            <button
              type="button"
              className="rounded border border-white px-2 py-1"
              onClick={back}
            >
              Back
            </button>
          )}
          <button
            type="submit"
            className="rounded border border-white px-2 py-1"
          >
            {isLastStep ? 'Finish' : 'Next'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
