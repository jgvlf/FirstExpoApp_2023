import {View, StyleSheet} from "react-native"
import { Button } from "../../UI/Form/Button"
import { ImageShow } from "./ImageShow"
import { useState } from "react"

export function ImageChange(){
    const [isShow, setIsShow] = useState(false);
    return(
        <View style={ImageChangeStyle.main}>
            <ImageShow isShow={isShow}/> 
            <Button onPress={()=>{
                setIsShow(!isShow);
            }}>
                Foto
            </Button>
        </View>
    )
}

const ImageChangeStyle = StyleSheet.create({
    main:{
        flex: 2,
     },  
})