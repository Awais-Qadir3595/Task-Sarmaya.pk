import { StyleSheet } from "react-native";
import { mvs } from "../../config/metrices";

const styles=StyleSheet.create({
    main:{
        flex:1
    },
    backimg:{
        height:mvs(313),padding:mvs(20),justifyContent:'space-between'
    },
    rw:{
        alignItems:'center',justifyContent:'flex-start'
    },
    body:{
        margin:mvs(10),marginHorizontal:mvs(15),marginBottom:mvs(20)
    },
    lowerImg:{
        marginRight:mvs(10),
    }
})
export {styles};