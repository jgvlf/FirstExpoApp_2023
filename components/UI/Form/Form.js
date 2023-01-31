import { View, StyleSheet } from "react-native";
import { TextField } from "./TextField";
import { Field } from "./Field";
import { Button } from "./Button";
import { TextInput } from "react-native";
import { useRef, useState } from "react";

export function Form({setIsLoged}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const passwordFieldRef = useRef(null);

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

    function performLoginWithKeyboard(event){
        if(event.keyCode === 13){
            performLogin();
        }
    }

    function selectTheNextInput(event){
        if(event.keyCode === 13){

        }
    }
    return(
        <View style={formStyle.main}>
            <View style={formStyle.main_field}>
                <TextField>
                    Usuário:
                    <Field onChange={handleUserChange} value={username}
                     isPassword={false} onKeyPress={selectTheNextInput}
                     returnKeyType="next"
                     onSubmitEditing={()=>{
                        passwordFieldRef.current.focus();
                     }}
                     blurOnSubmit={false}
                     />
                </TextField>
                <TextField>
                    Senha:
                    <Field onChange={handlePasswordChange} value={password} 
                    isPassword={true} onKeyPress={performLoginWithKeyboard}
                    ref={passwordFieldRef}
                    />
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