import React from 'react';
import { View, Text, Image, ImageBackground, ScrollView, Touchable, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { mvs } from '../../config/metrices';
import { Amazon, BackArrow, Img1, LinkedIn, Save } from '../../assets/svgs/index';
import Bold from '../../components/coreComponents/bold';
import Row from '../../components/coreComponents/Row';
import Label from '../../components/coreComponents/Label';
import * as SVGS from '../../assets/svgs';
const OffersDetail = (props) => {

  
  console.log(props.route.params.object)
  const item=props.route.params.object;
  const Icon=SVGS[item.icon];
  const Logo=SVGS[item.logo];
  return (
    <ScrollView style={styles.main}>
      {/* <Image  source={require('../../assets/images/bgImg.png')} height={100} width={100}/> */}

      <ImageBackground resizeMode='stretch'
        source={require('../../assets/images/bgImg.png')}
        style={styles.backimg}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
        <BackArrow />
        </TouchableOpacity>
        
        <Row style={styles.rw}>
          {Icon? <Icon/> : null}
          <View style={{ marginLeft: mvs(20) }}>
            <Bold label={item.title} color={'white'} size={mvs(28)} />
            <Bold label={item.name} color={'white'} size={mvs(22)} />
          </View>

        </Row>

      </ImageBackground>
      <View style={styles.body}>
        <Row style={{ alignItems: 'center' }}>
          <Bold label={item.address} size={22} color={'black'} />
          <Save />
        </Row>

        <Label label={`Published ${item.time}h ago on: `} color='gray' size={17}/>
        {Logo? <Logo height={19} width={77} style={{marginTop:mvs(10)}}/> : null}
        

        <Bold label='About us' size={22} color={'black'} style={{marginTop:mvs(20)}}/>
        <Label label='What unites all Amazonians across teams and regions is that we are all striving to
         delight customers and make their lives easier
        . Our mission drives us to seek diverse perspectives.' size={15} style={{marginTop:mvs(10)}}/>
      
     <ScrollView horizontal style={{marginVertical:mvs(20)}}>
      <Img1 style={styles.lowerImg}/>
      <Img1 style={styles.lowerImg}/>
      <Img1 style={styles.lowerImg}/>
      <Img1 style={styles.lowerImg}/>
     </ScrollView>
     </View>
    </ScrollView>
  );
};
export default OffersDetail;
