import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';

export function Field(){
    return(
        <View style={fieldStyles.main}>
            <TextInput style={fieldStyles.text}/>
        </View>
    );
}

const fieldStyles = StyleSheet.create({
    main:{
        marginTop: 10,
        width: "100%",
        backgroundColor: "#9B9B9B",
        borderRadius: 5,
        
    },
    text:{
        height: 20,
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '700',
    },
});