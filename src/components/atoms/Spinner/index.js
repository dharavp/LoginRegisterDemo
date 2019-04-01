import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => {
    return (
        <View style={[{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', top: 0, bottom: 0, right: 0, left: 0 }, props.moreStyle]}>
            <ActivityIndicator color={["#000000", props.indicatorColor]} />
        </View>
    );
};
export default Spinner;