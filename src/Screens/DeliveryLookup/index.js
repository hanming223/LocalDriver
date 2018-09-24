import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Button, FlatList, View, RefreshControl } from 'react-native';
import Styles from './styles';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';

export default class DeliveryLookup extends Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            loading: false
        })

        this.onTakeDelivery = this.onTakeDelivery.bind(this);

    }

    onTakeDelivery(){
        this.props.navigation.navigate("ReadyToPickupScreen")
    }

    render() {
        return (

            <SafeAreaView style={Styles.safeArea}>
                <Spinner visible={this.state.loading} textStyle={{color: '#FFF'}}/>

                <MapView
                    style={{width: '100%', aspectRatio: 1.5}}
                    
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                />

                <View style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'space-around'}}>
                    <View style={{flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white',
                                    height: 80, marginLeft: 20, marginRight: 20, paddingLeft: 10, paddingRight: 10,
                                    shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                        <View style={{ flexDirection: 'row', width: '100%', height: 20, width: '100%', alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: '400', color: 'black', width: 180}}>Estimated distance</Text>
                            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>2 Km</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 20, width: '100%'}}>
                            <Text style={{fontSize: 16, fontWeight: '400', color: 'black', width: 180}}>Estimated time</Text>
                            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>20:00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 20, width: '100%'}}>
                            <Text style={{fontSize: 16, fontWeight: '400', color: 'black', width: 180}}>Estimated earn</Text>
                            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>$30</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white',
                                    height: 60, marginLeft: 20, marginRight: 20, paddingLeft: 10, paddingRight: 10,
                                    shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                        <Text style={{fontSize: 16, fontWeight: '600', color: 'blue'}}>FROM</Text>
                        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>Adidas</Text>
                        <Text style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>445 Mount Eden Road, Mount Eden, Auckland</Text>
                    </View>

                   <View style={{flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white',
                                    height: 60, marginLeft: 20, marginRight: 20, paddingLeft: 10, paddingRight: 10,
                                    shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                        <Text style={{fontSize: 16, fontWeight: '600', color: '#EC6A41', width: 180}}>TO</Text>
                        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>Rikki Martin</Text>
                        <Text style={{fontSize: 13, fontWeight: '400', color: 'gray'}}>445 Mount Eden Road, Mount Eden, Auckland</Text>
                    </View>

                </View>

                <View style={{marginLeft: 30, marginRight: 30, height: 60, justifyContent: 'center'}}>
                    <TouchableOpacity style={Styles.signInContainer} onPress={this.onTakeDelivery}>
                        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold'}}>Take this delivery</Text>
                    </TouchableOpacity>
                </View>
                

            </SafeAreaView>

        )
    }

}