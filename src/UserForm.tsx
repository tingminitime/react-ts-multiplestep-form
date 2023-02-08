import FormWrapper from './FormWrapper'
import { FormDataType } from './App'

type UserFormType = Pick<FormDataType, 'firstName' | 'lastName' | 'age'>

type UserFormProps = UserFormType & {
  updateFields: (fields: Partial<UserFormType>) => void
}

function UserForm({ firstName, lastName, age, updateFields }: UserFormProps) {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input
        type="text"
        autoFocus
        required
        value={firstName}
        onChange={e => updateFields({ firstName: e.target.value })}
      />
      <label>Last Name</label>
      <input
        type="text"
        required
        value={lastName}
        onChange={e => updateFields({ lastName: e.target.value })}
      />
      <label>Age</label>
      <input
        type="number"
        min={1}
        required
        value={age}
        onChange={e => updateFields({ age: e.target.value })}
      />
    </FormWrapper>
  )
}
export default UserForm
