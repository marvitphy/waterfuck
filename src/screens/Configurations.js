import React from 'react'
import { NativeBaseProvider, Box, Heading, VStack, FormControl, Input, Button, Select, CheckIcon, Center, HStack, Icon, Text } from "native-base";
import { SafeAreaView } from 'react-native-safe-area-context';

export const Configurations = () => {
    return (

        <SafeAreaView>
            <Center m={5}>
                <Box w="full" mt={5}>
                    <Heading size="lg" fontWeight="600">
                        Opções
                    </Heading>
                    <Heading mt={1} color="gray.500" fontWeight="medium" size="xs">
                        Confiugre seu app
                    </Heading>
                </Box>
            </Center>
        </SafeAreaView>

    )
}