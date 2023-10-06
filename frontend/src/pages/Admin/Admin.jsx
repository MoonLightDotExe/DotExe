import React from 'react';
import "./Admin.css";
import { Chart } from "react-google-charts";
import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    Button, 
    ButtonGroup
  } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'

//charts

// export const data = [
//     ["Task", "Hours per Day"],
//     ["Work", 11],
//     ["Eat", 2],
//     ["Commute", 2],
//     ["Watch TV", 2],
//     ["Sleep", 7],
//   ];
  
//   export const options = {
//     title: "My Daily Activities",
//   };

//put in return 
{/* <div className='chart'>
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
    </div> */}

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
    <div className='center'>
        <img src="https://itjunkies.in/assets/images/blogs/map.webp" alt=""/>
    </div>

    <div className='button'>
    <Button colorScheme='blue' size='md'>Report</Button>
    </div>
    
</div>
  )
}

export default Admin