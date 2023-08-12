import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
const styles=StyleSheet.create({
    main:{
        flex:1,
    },
    body:{
        margin:mvs(10), paddingTop:mvs(20)
    },
    txt:{
        alignSelf:'flex-end', 
    },
    heading:{
        marginVertical:mvs(20)
    }
     
});
export default styles;