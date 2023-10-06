import React from 'react';
import "./Admin.css";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Button,
  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

function Admin() {
    const toast = useToast()
    setTimeout(() => { toast({
        position: 'top',
        title: 'Account created.',
        description: "We've created your account for you.",
        status: "error",
        duration: 9000,
        isClosable: true,
        containerStyle: {
            width: '800px',
            maxWidth: '100%',
          },
        })},2000)

  return (
<div>
    <div className='navbar'>
        {/* <Button
        onClick={() =>
            toast({
            position: 'top',
            title: 'Account created.',
            description: "We've created your account for you.",
            status: "error",
            duration: 9000,
            isClosable: true,
            containerStyle: {
                width: '800px',
                maxWidth: '100%',
              },
            })
        }
        >
        Show Toast
        </Button> */}
    </div>
    <div className='fabricate'>
        <StatGroup>
            <Stat>
                <StatLabel>Available Hospital Beds</StatLabel>
                <StatNumber>30,670</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                23.36%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Available Nurses</StatLabel>
                <StatNumber>5,900</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                30.08%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Available Fireman on standby</StatLabel>
                <StatNumber>480</StatNumber>
                <StatHelpText>
                <StatArrow type='decrease' />
                9.05%
                </StatHelpText>
            </Stat>

            <Stat>
                <StatLabel>Available Policeman on standby</StatLabel>
                <StatNumber>10,070</StatNumber>
                <StatHelpText>
                <StatArrow type='increase' />
                18.39%
                </StatHelpText>
            </Stat>
        </StatGroup>
    </div>
    <div className='map'>
        <img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_2560%2Cc_limit/GoogleMapTA.jpg" alt="" className='center'/>
    </div>
</div>
  )
}

export default Admin