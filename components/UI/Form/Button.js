import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export function Button({children}){
    return(
        <View style={buttonStyles.main_space}>
            <View style={buttonStyles.main}>
                <LinearGradient
                    colors={['#FF0000','#FFD000']}
                    start={{x:0, y:0}}
                    end={{x:1, y:1}}
                    style={{borderRadius: 5}}
                >
                <TouchableOpacity style={buttonStyles.main_button}>
                    <Text style={buttonStyles.text}>
                        {children}
                    </Text>
                </TouchableOpacity>
                </LinearGradient>
            </View>
        </View>
    );
};

const buttonStyles = StyleSheet.create({
    main_space:{
        flex: "auto",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "center",
        
    },
    main:{
        width: 80,
        height: 30,
        display: "flex",
        backgroundColor: "#9B9B9B",
        borderRadius: 5,
        
    },
    main_button:{
        borderRadius: 5,
        
    },
    text:{
        height: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'Arial',
        fontSize: 12,
        fontWeight: '700',
    },
});