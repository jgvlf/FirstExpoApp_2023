import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function IsLoged({setIsLoged}){
    var LeftArrowGradientIcon = require("../../../assets/left_arrow_gradient.png");
    return(
        <View style={isLogedStyles.main}>
            <View>
                <TouchableOpacity onPress={()=>{
                    setIsLoged(false);
                }}>
                    <Image source={LeftArrowGradientIcon} style={isLogedStyles.image}/>
                </TouchableOpacity>
            </View>
            <View style={isLogedStyles.div_text}>
                <Text style={isLogedStyles.text}>Home Page</Text>
            </View>
        </View>
    );
}

const isLogedStyles = StyleSheet.create({
    main:{
        backgroundColor: "#C8C8C8",
        width: "100%",
        height: "50px",
        display: "flex",
        flexDirection: "row",
    },
    image:{
        width: 50,
        height: 50,
    },
    div_text:{
        height: "100%",
        flexDirection: "row",
        alignItems: "center",
        flex: 2,
        justifyContent: 'flex-end',
        paddingRight: 20,
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
    },
})