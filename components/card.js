import React from "react";
import {
  Box,
  Text,
  Image,
  SimpleGrid,
  VStack,
  HStack,
  Divider,
  Stack,
  Spacer,
  Button,
  Center,
} from "@chakra-ui/react";
function Card({ name, city, cityInfo, email, phone, state, image, country }) {
  return (
    <Box
      m="0 auto"
      maxW="2xl"
      bg="#FFFFFF"
      border="1px solid gray"
      shadow="lg"
      rounded="3"
      mt={24}
    >
      <SimpleGrid columns={2} p={6} spacing={8}>
        <VStack>
          <Image src={image} boxSize="260px" borderRadius="full" alt="" />
          <Box py={4}>
            <HStack>
              <Box h="8px" w="15px" bg="green.300"></Box>
              <Box h="8px" w="15px" bg="green.300"></Box>
              <Box h="8px" w="15px" bg="green.300"></Box>
              <Box h="8px" w="15px" bg="green.300"></Box>
              <Box h="8px" w="15px" bg="green.300"></Box>
              <Box h="8px" w="15px" bg="gray.400"></Box>
              <Box h="8px" w="15px" bg="gray.400"></Box>
              <Box h="8px" w="15px" bg="gray.400"></Box>
              <Box h="8px" w="15px" bg="gray.400"></Box>
              <Box h="8px" w="15px" bg="gray.400"></Box>
            </HStack>
          </Box>
          <Box>
            <HStack mt={2} spacing={12}>
              <VStack>
                <Text textColor="gray.500" fontSize="xl">
                  Your Rating
                </Text>
                <Text
                  textColor="blackAlpha.900"
                  fontSize="3xl"
                  fontWeight="bold"
                >
                  53%
                </Text>
              </VStack>
              <VStack>
                <Text textColor="gray.500" fontSize="xl">
                  Activities
                </Text>
                <Text
                  textColor="blackAlpha.900"
                  fontSize="3xl"
                  fontWeight="bold"
                >
                  90%
                </Text>
              </VStack>
            </HStack>
          </Box>
        </VStack>
        <Box py={4}>
          <Text textColor="blackAlpha.900" fontSize="4xl" fontWeight="bold">
            {name}
          </Text>
          <Text textColor="gray.400">{cityInfo}</Text>
          <Divider mt={10} />
          <Stack mt={10}>
            <HStack>
              <Text textColor="gray.400">Email </Text>
              <Spacer />
              <Text textColor="gray.800" fontWeight="bold">
                {email}
              </Text>
            </HStack>
            <HStack>
              <Text textColor="gray.400">City</Text>
              <Spacer />
              <Text textColor="gray.800" fontWeight="bold">
                {city}
              </Text>
            </HStack>
            <HStack>
              <Text textColor="gray.400"> State</Text>
              <Spacer />
              <Text textColor="gray.800" fontWeight="bold">
                {state}
              </Text>
            </HStack>
            <HStack>
              <Text textColor="gray.400">Country</Text>
              <Spacer />
              <Text textColor="gray.800" fontWeight="bold">
                {country}
              </Text>
            </HStack>
            <HStack>
              <Text textColor="gray.400">Phone</Text>
              <Spacer />
              <Text textColor="gray.800" fontWeight="bold">
                {phone}
              </Text>
            </HStack>
          </Stack>
        </Box>
      </SimpleGrid>
    </Box>
  );
}

export default Card;
