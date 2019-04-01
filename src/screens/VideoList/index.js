import styles from './style';
import React from 'react';
import { fetchVideoList,fetchList } from '../../store/VideoList/actions';
import { Spinner } from '../../components/atoms';
import * as color from '../../constants/colors';
import { View, FlatList,Text,RefreshControl } from 'react-native';
import FastImage from 'react-native-fast-image';
import { connect } from 'react-redux';
import * as api from '../../constants/api';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.page = 1;
        this.state = {
            isRefreshing: false,
            videoList:[]
        }
      }
      componentWillMount(){
          this.props.fetchList(1);
      }
      renderSeparator = () => {
        return (
          <View
            style={{
              height: 2,
              width: '100%',
              backgroundColor: color.PRIMARY_COLOR
            }}
          />
        );
      };
      onRefresh(){
      }
   
      componentWillUpdate(nextProps, nextState) {
        if (this.props.loading !== nextProps.loading) {
          this.setState({
              videoList:nextProps.videoList
          })
        }
      }
    render() {
        if (this.props.loading) {
            return <Spinner
            indicatorColor={color.PRIMARY_COLOR}/>;
          }

        return (        
      <View style={{ width: '100%', height: '100%',
      marginTop:40 }}>
      <FlatList
       style={{
           width:'100%',
           height:'100%'
       }}
        data={this.state.videoList}
        extraData={this.state}
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh.bind(this)}
          />
        }
        renderItem={({ item }) => (
          <View style={{
            padding: 15,
            alignItems: 'center',
            width:'100%',
            height:90,
          }}>
         
          <View style={{
            width:'100%',
            height:'100%',
            position:'absolute',
            bottom:6,
            borderRadius:8,
            paddinBottom:4,
            justifyContent:'flex-end',
            alignItems:'center',
            borderWidth:1,
            borderColor:`rgb(72,176,232)`,
            backgroundColor:`rgb(216,240,253)`
          }}>
            <Text style={{
              fontSize: 14,
              alignItems: 'center',
              color: '#000',
              
            }}>{item.title}</Text>
          </View>
        
          <FastImage
              style={{
                  width:'100%',
                  height:50,
                  borderRadius:25,
                  shadowOpacity: 1.0,
              }}
               source={{
                 uri: item.thumbnail_url,
                priority: FastImage.priority.normal,
             }}
                resizeMode={FastImage.resizeMode.contain} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={this.renderSeparator}
        onEndReachedThreshold={0.4}
      />
    </View>
        );
    }
}

const mapStateToProps = ({ videoReducer }) => {
    const { loading,videoList } = videoReducer;
    return  {loading,videoList };
};


export default connect(mapStateToProps, { fetchList })(VideoList);