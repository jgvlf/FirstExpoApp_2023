import {View, StyleSheet, Image} from "react-native"

function getRandomValue(max, min){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max-min+1)+min);
}

export function ImageShow({isShow}){
    var id = getRandomValue(1084, 0);
    return(
        isShow ?
        (
        <View>
            <Image style={ImageShowStyle.ImageView} source={{uri: `https://picsum.photos/id/${id}/200/300`}}/>
        </View>
        )
        :
        (
        <View>
            
        </View>  
        )
    )
}

const ImageShowStyle = StyleSheet.create({
     ImageView:{
        width: 200,
        height: 300,
     },
})