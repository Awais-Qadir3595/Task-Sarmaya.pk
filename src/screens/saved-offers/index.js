import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import { Bag } from '../../assets/svgs'; 
import styles from './style';
import Label from '../../components/coreComponents/Label';
import Bold from '../../components/coreComponents/bold'; 
import OfferCard from '../../components/App-components/offerCard';

const SavedOffers = ({navigation}) => {
  const Data=[
    {
      icon:'Amazon',
      title:'UX Designer',
      name:'Amazon',
      address:'Seattle, US (Remote)',
      time:9,
      logo:'LinkedIn'
    },
    {
      icon:'CoinBase',
      title:'Product Designer',
      name:'Coinbase',
      address:'San Francisco, US (Remote)',
      time:9,
      logo:'LinkedIn'
    },
    {
      icon:'Uiux',
      title:'Lead UX/UI Designer',
      name:'Figma',
      address:'London, UK (Remote)',
      time:5,
      logo:'Glassdoor'
    },
    {
      icon:'VrDesigner',
      title:'VR Designer',
      name:'Meta',
      address:'London, UK (Remote)',
      time:9,
      logo:'Monstar'
    },
    {
      icon:'Uiuxyellow',
      title:'VR Designer',
      name:'Meta',
      address:'London, UK (Remote)',
      time:9,
      logo:'LinkedIn'
    },

  ]
  return (
    <ScrollView style={styles.main}>
      <View style={styles.body}>
      <Label label={'Edit'} size={17} color='blue' style={styles.txt}/>
      <Bold label={'Saved offers'} size={34} color={'black'} style={styles.heading}/>
       
       {
        Data.map((item,index)=>{
        
          return(
            <OfferCard key={index} icon={item.icon} title={item.title} name={item.name} 
            address={item.address} time={item.time} logo={item.logo} onNavigate={()=>navigation.navigate('OffersDetail',{object:item})
            }/>
          )
        })
       }
       
        
      </View>
   
      
    </ScrollView>
  );
};
export default SavedOffers;
