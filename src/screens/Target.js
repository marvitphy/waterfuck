import React, { useContext, useState } from 'react'
import { NativeBaseProvider, Box, Heading, VStack, FormControl, Input, Button, Select, CheckIcon, Center, HStack, Icon, Text, Badge, Pressable } from "native-base";
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import UserContext from '../context/UserContext';
export const Target = () => {
    const { userPeso, setUserPeso } = useContext(UserContext);
    const [isPressed, setIsPressed] = useState(false)

    const addHidratation
    let total = userPeso * 35;
    return (

        <SafeAreaView>
            <Center m={5}>
                <Box
                    bg="#99DAEF"
                    rounded="3xl"
                    h={200}
                    w="full"
                    mx="auto"
                    mt={10}
                    p={6}
                >
                    <HStack w="full" space={2} alignItems="center" justifyContent="space-between">
                        <HStack space={2} alignItems="center" >

                            <Icon
                                as={<Ionicons name="water" />}
                                size="sm"
                                color="black"
                            />
                            <Text color="black" fontSize="sm">Hidratação Atual</Text>
                        </HStack>
                        <View style={styles.circle}>
                            <Icon as={<Ionicons name="information-circle-outline" />} color="black" size="md" />
                        </View>
                    </HStack>

                    <Center mt={3}>
                        <VStack space={2} alignItems="center" >
                            <Text color="black" fontSize="4xl" fontWeight={'bold'}> 0 ML</Text>
                            <Text color="black" fontSize="sm" fontWeight={'light'}>Meta: {total} ML</Text>
                        </VStack>
                    </Center>
                </Box>
                <HStack w="full" space={2} alignItems="center" justifyContent="space-between" mt={1}>
                    <Box
                        h={200}
                        w="50%"
                        mx="auto"
                    >
                        <Box p={5} rounded="3xl" mx="auto" bg="#E7F5FF" h={98} w="full">
                            <Text color="black" fontSize="sm" fontWeight={'medium'}>Peso(kg)</Text>
                            <Text color="black" fontSize={18} fontWeight={'medium'}>40</Text>
                        </Box>
                        <Box mt={1} p={5} rounded="3xl" mx="auto" bg="#cbe5f7" h={98} w="full">
                            <Text color="black" fontSize="sm" fontWeight={'medium'}>Altura(cm)</Text>
                            <Text color="black" fontSize={18} fontWeight={'medium'}>185</Text>
                        </Box>
                    </Box>
                    <Pressable
                        onPress={() => { alert('Líquidos') }}
                        bg="#CCF2FE"
                        rounded="3xl"
                        h={200}
                        w="50%"
                        mx="auto"

                        p={6}
                    >
                        <Text color="black" fontSize="sm" fontWeight={'medium'}>
                            <Icon as={<Ionicons name="water" />} size="sm" color="black" />
                            Líquidos
                        </Text>
                    </Pressable>
                </HStack>

                <Pressable onPress={}>
                    <Box mt={20} justifyContent="center" alignContent="center" alignItems="center" bg="#99DAEF" h={20} w={20} style={{
                        borderRadius: 50,
                        transform: [{
                            scale: isPressed ? 0.96 : 1
                        }]
                    }}>
                        <Icon as={<Ionicons name="add-outline" />} size={10} color="black" />
                    </Box>
                </Pressable>

            </Center>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    circle: {
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})