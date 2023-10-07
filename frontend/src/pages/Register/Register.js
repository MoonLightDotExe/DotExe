import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'
import './Register.css'

const Register = () => {
  return (
    <div className='reg-container'>
      <div className='reg-inner'>
        <p>Register Here!</p>
        <span>New user</span>
        <FormControl m={1.5}>
          <FormLabel p={0}>Name</FormLabel>
          <Input type='text' borderColor={'#000'} opacity={0.5} w={420} />
          <FormLabel>Address</FormLabel>
          <Input type='text' borderColor={'#000'} opacity={0.5} w={420} />
          <FormLabel>Email address</FormLabel>
          <Input type='email' borderColor={'#000'} opacity={0.5} w={420} />
          <FormLabel>Password</FormLabel>
          <Input type='password' borderColor={'black'} opacity={0.5} w={420} />
          <FormLabel>Confirm Password</FormLabel>
          <Input type='password' borderColor={'black'} opacity={0.5} w={420} />
          <span className='reg-forgot'>Forgot Password?</span>

        </FormControl>
        <div className='reg-button'>
          <Button type='submit' mt={5} p={3} colorScheme='blue' w={60}>Sign In</Button>
        </div>
        <div className='reg-text'>
          Already have an account?
          <a href='/'>Login</a>
        </div>

      </div>
    </div>

  )
}

export default Register