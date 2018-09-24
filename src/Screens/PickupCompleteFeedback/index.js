import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Text, Button, FlatList, View, RefreshControl } from 'react-native';
import Styles from './styles';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';

export default class ConfirmPickup extends Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            loading: false,
            refreshing: false
        })

        this.onConfirmPickup = this.onConfirmPickup.bind(this);
    }

    onConfirmPickup(){

    }

    render() {
        return (

            <SafeAreaView style={Styles.safeArea}>

                <View style={{marginLeft: 30, marginRight: 30, height: 200, justifyContent: 'center'}}>

                    <TouchableOpacity style={Styles.receiptContainer} onPress={this.onConfirmPickup}>
                        <Text style={{color: '#FF7642', fontSize: 16, fontWeight: 'bold'}}>All Good</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.receiptContainer} onPress={this.onConfirmPickup}>
                        <Text style={{color: '#FF7642', fontSize: 16, fontWeight: 'bold'}}>The client was not present</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.receiptContainer} onPress={this.onConfirmPickup}>
                        <Text style={{color: '#FF7642', fontSize: 16, fontWeight: 'bold'}}>Other</Text>
                    </TouchableOpacity>
                    
                </View>

                <TouchableOpacity style={Styles.signInContainer} onPress={this.onConfirmPickup}>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Confirm delivery end</Text>
                </TouchableOpacity>

            </SafeAreaView>

        )
    }

}