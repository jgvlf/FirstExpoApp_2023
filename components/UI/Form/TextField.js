import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function TextField({children}){
    return(
        <View style={textFieldStyles.main}>
            <Text style={textFieldStyles.text}>
                {children}
            </Text>
        </View>
    );
}

const textFieldStyles = StyleSheet.create({
    main:{
        width: "100%",
        height: 200,
        backgroundColor: "#E8E8E8",
        borderRadius: 20,
        padding: 10,
        
    },
    text:{
        marginTop: 10,
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '700',
    },
});