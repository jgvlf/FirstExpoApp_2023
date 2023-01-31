import { View, StyleSheet } from "react-native";
import { TextField } from "./TextField";
import { Field } from "./Field";
import { Button } from "./Button";

export function Form(){
    return(
        <View style={formStyle.main}>
            <View style={formStyle.main_field}>
                <TextField>
                    Usuário:
                    <Field/>
                </TextField>
                <TextField>
                    Senha:
                    <Field/>
                </TextField>
                <Button>
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