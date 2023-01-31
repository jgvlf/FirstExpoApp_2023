import { View, StyleSheet } from "react-native";
import { TextField } from "./TextField";
import { Field } from "./Field";
import { Button } from "./Button";
import { useState } from "react";

export function Form({setIsLoged}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleUserChange(event){
        setUsername(event.target.value);
    }

    function handlePasswordChange(event){
        setPassword(event.target.value);
    }

    function performLogin(){
        if(username=="JGVLF" && password==1234){
            console.log("Logado com Sucesso");
            setIsLoged(true)
        }
        else{
            console.log("Usuário e senha invalido, por favor digite novamente");
            setUsername("")
            setPassword("")
            setIsLoged(false)
        }
    }
    return(
        <View style={formStyle.main}>
            <View style={formStyle.main_field}>
                <TextField>
                    Usuário:
                    <Field onChange={handleUserChange} value={username}/>
                </TextField>
                <TextField>
                    Senha:
                    <Field onChange={handlePasswordChange} value={password}/>
                </TextField>
                <Button onPress={performLogin}>
                    Logar
                </Button>
            </View>
        </View>
    );
}

const formStyle = StyleSheet.create({
    main:{
        width: "100%",
        flex: 2,
        display: "flex",
        justifyContent: "center",
        paddingHorizontal: 40,
    },
    main_field:{
        width: "100%",
        height: 200,
        backgroundColor: "#E8E8E8",
        borderRadius: 20,
        padding: 10,
        
    },
});