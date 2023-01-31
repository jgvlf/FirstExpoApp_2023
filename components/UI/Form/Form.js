import { View, StyleSheet } from "react-native";
import { TextField } from "./TextField";
import { Field } from "./Field";

export function Form(){
    return(
        <View style={formStyle.main}>
            <TextField>
                Usuário:
                <Field/>
            </TextField>
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
});