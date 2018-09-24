import React, { Component } from 'react';
import { SafeAreaView, Image, StyleSheet, TouchableOpacity, TouchableHighlight, Text, Button, FlatList, View, RefreshControl } from 'react-native';
import Styles from './styles';
import MapView from 'react-native-maps';
import Spinner from 'react-native-loading-spinner-overlay';

var orderArray = [{'id': 1, 'name': 'Adidas', 'type': 'Clothes', 'count': '5', 'weight': '2.5'},
                        {'id': 2, 'name': 'Nike', 'type': 'Shoes', 'count': '5', 'weight': '2.5'},
                        {'id': 3, 'name': 'Argos Market', 'type': 'Products', 'count': '5', 'weight': '2.5'},
                        {'id': 4, 'name': 'Stop Sho', 'type': 'Stop Shop', 'count': '5', 'weight': '2.5'}]


export default class Home extends Component {

    
    constructor(props) {
        super(props);
        this.state = ({
            loading: false,
            refreshing: false
        })

        this.onPressItem = this.onPressItem.bind(this);
    }

    refreshOrderList(){
        this.setState({refreshing: false})
    }

    onPressItem(item){
        this.props.navigation.navigate("DeliveryLookupScreen")
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


                <FlatList
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.refreshing}
                        title="Refreshing..."
                        onRefresh={this.refreshOrderList}
                        />
                    }
                    style={{flex: 1, width: '100%', height: '100%'}}
                    data={orderArray}
                    keyExtractor={item => item.id.toString()}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item, separators}) => {    
                        
                        return <TouchableOpacity
                                    onPress={() => this.onPressItem(item)}
                                    style={{height: 83, marginLeft: 15, marginRight: 15}}>
                                        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 13, flex: 1, backgroundColor: 'white',
                                                        shadowColor: 'gray', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.8, shadowRadius: 2}}>
                                            <View style={{width: 60, height: 60, borderRadius: 30, borderWidth: 0.3, borderColor: 'gray', marginLeft: 10}}>
                                                <Image source={require('../../Assets/Images/temp_adidas_log.png')} style={{width:'100%', height: '100%'}}  />
                                            </View>
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

            </SafeAreaView>

        )
    }

}