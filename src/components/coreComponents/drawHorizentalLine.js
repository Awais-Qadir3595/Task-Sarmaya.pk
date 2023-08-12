import { mvs } from "../config/metrices";
import React from "react";
import { TouchableOpacity ,Text,StyleSheet,View} from "react-native";
 
const DrawHorizentalLine=({ style})=>{
    return(
           
            <View style={{...styles.main,...style}}>
               
            </View>
          
    )
}
export default DrawHorizentalLine;
const styles=StyleSheet.create({
    main:{borderBottomColor:'black',alignItems:'center',borderBottomWidth:1,marginVertical:mvs(10),width:'100%' }
    
})