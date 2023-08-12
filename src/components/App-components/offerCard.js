import React from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';
import { mvs } from '../../config/metrices';
import * as SVGS from '../../assets/svgs';
import Bold from '../coreComponents/bold';
import Label from '../coreComponents/Label';
import Row from '../../components/coreComponents/Row';
const OfferCard=({icon,title,name,address,time,onNavigate,onSave,logo})=>{
    const Icon=SVGS[icon];
    const Logo=SVGS[logo];
    return(
        <Row style={styles.main}>
        <Row>
          {Icon? <Icon/>:null}
          <TouchableOpacity style={styles.content} onPress={onNavigate}>
            <Bold label={title} size={mvs(17)} color={'black'}/>
            <Label label={name} size={mvs(15)}/>
            <Label label={address} size={mvs(15)} color='rgba(60, 60, 67, 0.6)'/>
            <Row style={{justifyContent:'flex-start',alignItems:'center'}}>
            <Label label={time+'h ago on'} size={mvs(11)} style={styles.time}/>
            {Logo? <Logo/> : null}
            </Row>
            
          </TouchableOpacity>
          </Row>
          <View style={styles.rightEnd}>
          <TouchableOpacity onPress={onSave}>
          <SVGS.Save fill='black'/>
          </TouchableOpacity>
            <TouchableOpacity onPress={onNavigate}>
            <SVGS.NextIcon/>
            </TouchableOpacity>
           
          </View>
            </Row>

        
    )
}
export default OfferCard;
const styles=StyleSheet.create({
    main:{
        height:mvs(110), borderTopWidth:1,borderColor:'lightgray',
        marginVertical:mvs(10), justifyContent:'space-between',
        padding:mvs(10), 
    },
    rightEnd:{
alignItems:'center',justifyContent:'space-between'
    },
    content:{
        marginLeft:mvs(20)
    },
    time:{
      marginRight:mvs(10)
    }
})