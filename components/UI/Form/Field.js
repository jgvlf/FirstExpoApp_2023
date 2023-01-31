import { StyleSheet, View, TextInput } from 'react-native';

export function Field({onChange, value}){
    return(
        <View style={fieldStyles.main}>
            <TextInput style={fieldStyles.text} onChange={onChange} value={value}/>
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