import React, {useState, useRef, useCallback, useEffect} from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
// import Slider from 'react-native-slider';

const MainComponent = () => {
    const [pause, setPause] = useState(true);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
   
    // height:Dimensions.get('screen').height
    return (
        <View style={{flex:1}}>
            <Video
                // ref={(ref)=>{videoRef.current = ref}}
                source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"}}                 
                controls={true}
                // paused={pause}
                // playInBackground={false}
                // resizeMode={'contain'}
                currentPlaybackTime= {currentTime}
                onLoad={(obj)=>{
                console.log(obj)
                }}
                onProgress={(parameters)=>{
                    if(parameters.currentTime < currentTime){
                        
                    }
                }}
                style={{
                    borderColor:'red',
                    borderWidth:1,
                    height: '50%',
                    width: '100%',
                    borderColor:'red',
                    borderWidth:1,
                    
                }}
            />
            {/* <MediaControls
                 onPaused={pause}
            >
                 <MediaControls.Toolbar>
                    <View>
                        <Text>I'm a custom toolbar </Text>
                    </View>
                </MediaControls.Toolbar>
            </MediaControls> */}

            {/* <Slider 
                value={videoTime}
                onValueChange={(value) => setVideoTime({value})}
            /> */}

            <TouchableOpacity
                style={{
                    width:100,height:20,backgroundColor:'pink',borderRadius:50
                }}
                onPress={()=>setPause(!pause)}
            >
                <Text>{'Play/Pause'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    width:100,height:20,backgroundColor:'pink',borderRadius:50
                }}
                onPress={()=>setPause(!pause)}
            >
                <Text>{'<<'}</Text>
            </TouchableOpacity>
        </View>
    )
};
export default MainComponent;