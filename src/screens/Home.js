import React, { useState, useRef, useContext} from "react";
import { Alert, StyleSheet, Animated, Easing } from "react-native";
import { NativeBaseProvider, Box, Heading, VStack, FormControl, Input, Button, Select, CheckIcon, Center, HStack, Icon, Text } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import UserContext  from "../context/UserContext";

export const Home = ({navigation}) => {
    const {userPeso, setUserPeso} = useContext(UserContext);

    const [peso, setPeso] = useState(0);
    const [total, setTotal] = useState(0);
    const calcular = async () => {
        if (peso <= 0) {
            Alert.alert("Ops!", "Informe um peso válido")

        } else {
            setUserPeso(peso);
            navigation.navigate('target')
        }
    }
    return (

        <SafeAreaView>
            <Center m={5} textTransform>

                <Animated.View

                    style={{ width: '100%', opacity: 1 }}
                >
                    <Box
                        bg="white"
                        p={2}
                        w="full"
                        mt={5}
                        style={styles.elementoInicial}
                    >
                        <FormControl>
                            <FormControl.Label

                            >
                                Informe o seu peso
                            </FormControl.Label>
                            <Input value={peso} onChangeText={setPeso} keyboardType="numeric" placeholder="Digite o seu peso" />
                        </FormControl>
                        <Button onPress={calcular} mt={4} colorScheme="lightBlue" color="white">
                            Continuar 
                        </Button>
                    </Box>
                </Animated.View>



            </Center>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    elementoInicial: {

    }
})