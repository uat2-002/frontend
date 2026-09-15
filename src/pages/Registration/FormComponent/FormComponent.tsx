import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';

import './FormComponentStyle.css';

//needs updating once we have login link

const RegistrationInputFieldgroup = () => {
  return (
    <form className='formContainer'>
      <FieldGroup className='registrationInputField'>
        <h2>Register</h2>

        <Field>
          <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
          <Input id="fieldgroup-name" placeholder="Jordan Lee" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
          <Input id="fieldgroup-email" type="email" placeholder="name@example.com" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Password</FieldLabel>
          <Input id="fieldgroup-email" type="password" required />
        </Field>

        <Field>
          <FieldLabel htmlFor="fieldgroup-password">Confirm Password</FieldLabel>
          <Input id="fieldgroup-email" type="password" required />
        </Field>

        <Field orientation="horizontal" className="buttonField">
          <Button type="reset" variant="secondary" className="resetFormButton">
            Reset
          </Button>
          <Button type="submit" className="submitFormButton">Submit</Button>
        </Field>

        <p className="items-center text-sm font-medium">
          Already have an account? <a href="http://">Log in</a> 
        </p>
      </FieldGroup>
    </form>
  );
};

export default RegistrationInputFieldgroup;
