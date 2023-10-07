import React from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from '@chakra-ui/react'
import './Login.css'

function Login() {
  return (
    <div className='login-container'>
      <div className='login-inner'>
        <p>Already a User</p>
        <span>Login Here!</span>
        <FormControl>
          <FormLabel>Email address</FormLabel>
          <Input
            type='email'
            borderColor={'#000'}
            opacity={0.5}
          />
          <FormHelperText>We'll never share your email.</FormHelperText>

          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            borderColor={'black'}
            opacity={0.5}
          />
          <div className='reg-button'>Forgot Password?</div>
        </FormControl>
        <div className='login-button'>
          <a href='/map'>
            {' '}
            <Button
              type='submit'
              mt={5}
              p={3}
              colorScheme='blue'
              w={60}
            >
              Sign In
            </Button>
          </a>
        </div>
        <div className='login-text'>
          Doesn't have account yet?
          <a href='/register'>Register</a>
        </div>
      </div>
    </div>
  )
}

export default Login
