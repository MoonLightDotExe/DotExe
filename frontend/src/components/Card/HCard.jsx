import React from 'react'
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react'
import './Card.css'

function HCard({ head, addr, img }) {
  return (
    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
    >
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={img}
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>{head}</Heading>

          <Text py='2'>{addr}</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant='solid'
            colorScheme='blue'
          >
            Accept
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  )
}

export default HCard
