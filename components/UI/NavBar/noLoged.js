import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function NoLoged(){
    return(
        <View style={noLogedStyles.main}>
            <View style={noLogedStyles.div_text}>
                <Text style={noLogedStyles.text}>Login</Text>
            </View>
        </View>
    );
}

const noLogedStyles = StyleSheet.create({
    main:{
        backgroundColor: "#E8E8E8",
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "row",
    },
    div_text:{
        height: "100%",
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontFamily: 'Arial',
        fontSize: 20,
        fontWeight: 'bold',
    },
})