import { StyleSheet, Text } from 'react-native';

export function TextField({children}){
    return(
            <Text style={textFieldStyles.text}>
                {children}
            </Text>
    );
}

const textFieldStyles = StyleSheet.create({
    text:{
        marginTop: 10,
        fontSize: 12,
        fontWeight: '700',
    },
});