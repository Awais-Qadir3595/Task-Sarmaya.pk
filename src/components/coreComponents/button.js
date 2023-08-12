import React from "react";
import { TouchableOpacity ,StyleSheet} from "react-native";
 import { Text } from ".";
import Bold from "./bold";
import Label from "./Label";
import { mvs } from "../services/metrices";
const PrimaryButton=({onclick,label='',color,width,height,style,bgColor})=>{
    return(
           <TouchableOpacity style={{...styles.main,width:width,height:height,backgroundColor:bgColor,...style}} onPress={onclick}>
           <Text title3>{label}</Text>
           </TouchableOpacity>
    )
}
export default PrimaryButton;
const styles=StyleSheet.create({
    main:{
        backgroundColor:'#20D994', justifyContent:'center',alignItems:'center',borderRadius:mvs(10),marginVertical:mvs(20),
        

    }
})