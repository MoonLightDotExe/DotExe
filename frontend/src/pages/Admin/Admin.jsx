import React from 'react';
import "./Admin.css";
import { Chart } from "react-google-charts";
import HCard from '../../components/Card/HCard';
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

const data = [
    {
        head: 'head1',
        addr:'address1',
        img:'img1',
    },
    {
        head: 'head2',
        addr:'address2',
        img:'img2',
    },
    {
        head: 'head3',
        addr:'address3',
        img:'img3',
    },
    {
        head: 'head4',
        addr:'address4',
        img:'img4',
    }
]

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
    <div className='admin_navbar'>
       
    </div>
    <div className='admin_fabricate'>
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
    <div className='admin_center'>
        <img src="https://itjunkies.in/assets/images/blogs/map.webp" alt=""/>
    </div>

    <div className='admin_button'>
    <Button colorScheme='blue' size='md'>Report</Button>
    </div>

    <div>
      {data.map((data) => {
        return(
            <div className='admin_use'>
            <HCard head={data.head} addr={data.addr} img={data.img}/>
            </div>
        )
        })}
    </div>
    
</div>
  )
}

export default Admin