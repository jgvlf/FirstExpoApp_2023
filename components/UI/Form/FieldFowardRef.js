import { StyleSheet, View, TextInput } from 'react-native';
import React from 'react';

export const FieldFowardRef = React.forwardRef(({onChange, value, isPassword, onKeyPress, returnKeyType, onSubmitEditing, blurOnSubmit}, ref)=>{
    return(
        <View style={fieldStyles.main}>
            <TextInput style={fieldStyles.text} onChange={onChange}
                value={value}
                secureTextEntry={isPassword}
                onKeyPress={onKeyPress}
                returnKeyType={returnKeyType}
                onSubmitEditing={onSubmitEditing}
                ref={ref}
                blurOnSubmit={blurOnSubmit}
            />
        </View> 
    );
    }
)
const fieldStyles = StyleSheet.create({
    main:{
        marginTop: 10,
        width: "100%",
        backgroundColor: "#9B9B9B",
        borderRadius: 5,
        
    },
    text:{
        height: 20,
        fontSize: 12,
        fontWeight: '700',
    },
});