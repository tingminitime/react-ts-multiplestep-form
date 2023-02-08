import FormWrapper from './FormWrapper'
import { FormDataType } from './App'

type AccountFormType = Pick<FormDataType, 'email' | 'password'>

type AccountFormProps = AccountFormType & {
  updateFields: (fields: Partial<AccountFormType>) => void
}

function AccountForm({ email, password, updateFields }: AccountFormProps) {
  return (
    <FormWrapper title="Account Creation">
      <label>Email</label>
      <input
        type="email"
        required
        autoFocus
        value={email}
        onChange={e => updateFields({ email: e.target.value })}
      />
      <label>Password</label>
      <input
        type="password"
        required
        value={password}
        onChange={e => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  )
}
export default AccountForm
