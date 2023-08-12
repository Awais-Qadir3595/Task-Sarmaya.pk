import React from "react";
import { TouchableOpacity ,Text,StyleSheet,View} from "react-native";
import { mvs } from "../../config/metrices";
const Row=({children,style})=>{
    return(
           
            <View style={{...styles.main,...style}}>
            {children}
            </View>
          
    )
}
export default Row;

const styles=StyleSheet.create({
    main:{flexDirection:'row',justifyContent:'space-between',}
    
})