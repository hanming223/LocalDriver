import {
    Dimensions,
} from 'react-native';

const deviceHeight = Dimensions.get("window").height;

export default {

    safeArea: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#fdfdfd',

    },

    signInContainer: {
        width: '100%', 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: '#FF7642',
        borderColor: 'gray',
        borderWidth: 0.1,
        shadowColor: 'white',
        shadowRadius: 10,
        shadowOpacity: 0.1
    },

    receiptContainer: {
        width: '100%', 
        height: 45, 
        alignItems: 'center', 
        justifyContent: 'center', 
        borderColor: '#FF7642',
        borderWidth: 2,
        shadowColor: 'white',
        shadowRadius: 10,
        shadowOpacity: 0.1,
        marginBottom: 10
    }
};