import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Text, Button, FlatList, View, RefreshControl } from 'react-native';
import Styles from './styles';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';


export default class PickupComplete extends Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            loading: false
        })

        this.onConfirmComplete = this.onConfirmComplete.bind(this);

    }

    onConfirmComplete(){
        this.props.navigation.navigate("PickupCompleteFeedbackScreen")
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
                            <Text style={{fontSize: 16, fontWeight: '600', color: '#FF7642', width: 180}}>GO TO DROP OFF</Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 20, width: '100%'}}>
                            <Text style={{fontSize: 16, fontWeight: '400', color: 'black', flex: 1}}>Rikki Martin</Text>
                            {/* <Text style={{fontSize: 13, fontWeight: '600', color: 'blue', width: 50, alignSelf: 'flex-end', textAlign: 'right'}}>5 itmes</Text> */}
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', height: 20, width: '100%'}}>
                            <Text style={{fontSize: 16, fontWeight: '400', color: 'gray', flex: 1}}>445 Mount Eden Road, Mount Eden, Auckland</Text>
                            {/* <Text style={{fontSize: 13, fontWeight: '600', color: 'black', width: 50, alignSelf: 'flex-end', textAlign: 'right'}}>2,5 kg</Text> */}
                        </View>
                    </View>

                    <View style={{flexDirection: 'column', marginLeft: 20, marginRight: 20}}>
                        <Text style={{fontSize: 15, fontWeight: '400', color: 'black', marginBottom: 10}}>Pick up additional information</Text>
                        <View style={{flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white',
                                        height: 100, 
                                        shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                            <TextInput
                                style={Styles.TextInputStyle}
                                placeholder="Additional information here"
                                onChangeText={(text) => this.setState({story: text})}
                                autoCapitalize='none'
                                multiline={true}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                    </View>
                    

                </View>

                <View style={{marginLeft: 30, marginRight: 30, height: 60, justifyContent: 'center'}}>
                    <TouchableOpacity style={Styles.signInContainer} onPress={this.onConfirmComplete}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold'}}>Confirm delivery end</Text>
                    </TouchableOpacity>
                </View>
                

            </SafeAreaView>

        )
    }

}