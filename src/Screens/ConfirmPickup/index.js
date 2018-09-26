import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, TextInput, Text, Button, FlatList, View, RefreshControl } from 'react-native';
import Styles from './styles';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';

var orderArray = [{'id': 1, 'name': 'Adidas', 'type': 'Clothes', 'count': '5', 'weight': '2.5'},
                        {'id': 2, 'name': 'Nike', 'type': 'Shoes', 'count': '5', 'weight': '2.5'},
                        {'id': 3, 'name': 'Argos Market', 'type': 'Products', 'count': '5', 'weight': '2.5'},
                        {'id': 4, 'name': 'Stop Sho', 'type': 'Stop Shop', 'count': '5', 'weight': '2.5'}]
                        
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
        this.props.navigation.navigate("PickupCompleteScreen")
    }

    render() {
        return (

            <SafeAreaView style={Styles.safeArea}>
                <Spinner visible={this.state.loading} textStyle={{color: '#FFF'}}/>

                <Text style={{fontSize: 16, fontWeight: '600', color: 'black', marginTop: 10, alignSelf: 'center'}}>Check the list of products</Text>
                <FlatList
                    style={{ width: '100%', height: 100}}
                    data={orderArray}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, separators}) => {    
                        
                    return <TouchableOpacity
                                // onPress={() => this.onPressItem(item)}
                                style={{height: 83, marginLeft: 20, marginRight: 20}}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 13, flex: 1, backgroundColor: 'white',
                                                    shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                                        <View style={{ flexDirection: 'column', justifyContent: 'space-between', height: 45, marginLeft: 15}}>
                                            <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>{item.name}</Text>
                                            <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>{item.type}</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: 45, marginLeft: 15,
                                                position: 'absolute', right: 10}}>
                                            <Text style={{fontSize: 16, fontWeight: '600', color: 'blue'}}>{item.count} items</Text>
                                            <Text style={{fontSize: 14, fontWeight: '300', color: 'black'}}>{item.weight} kg</Text>
                                        </View>

                                    </View>
                            </TouchableOpacity>

                    }}
                />

                <View style={{marginLeft: 30, marginRight: 30, height: 120, justifyContent: 'center'}}>

                    <TouchableOpacity style={Styles.receiptContainer} onPress={this.onConfirmPickup}>
                        <Text style={{color: '#FF7642', fontSize: 16, fontWeight: 'bold'}}>Take photo receipt</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.signInContainer} onPress={this.onConfirmPickup}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>I confirm all products are with me</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        )
    }

}