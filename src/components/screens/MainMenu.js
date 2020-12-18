import React from 'react';
import {
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import * as Font from 'expo-font';
import Button from '../Button';
import { startGameSelection } from '../../actions';
import { scale, moderateScale, verticalScale} from '../../Scaling';


const BACKGROUND_IMAGE = require('../../../assets/images/green_background.jpg');
const GAME_TITLE_FONT = require('../../../assets/fonts/SaucerBB.ttf');




class MainMenu extends React.Component {

  constructor(props){
		super(props);
	
		this.state = {
			fontLoaded: false
		};
  }
  
  async componentDidMount() {
    await Font.loadAsync({
      'game-title': GAME_TITLE_FONT,
    });
    this.setState({ fontLoaded: true });
  }

 

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
            style={styles.imageBackground}
            source={BACKGROUND_IMAGE}
            resizeMode="cover"
          >
          {(this.state.fontLoaded) &&
          <View style={styles.gameTitleContainer}>
            <Text style={styles.gameTitle}> TRIVIA GAME </Text>
          </View>
          }
          <Button style={styles.playButton} onPress={this.props.startGameSelection}>
            Play
          </Button>
         
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  gameTitleContainer: {
    flex: 1,
    marginTop: scale(60),
    alignSelf: 'center',
    justifyContent: 'flex-start',
  },
  gameTitle: {
    fontFamily: "game-title",
    color: '#000000',
    fontSize: moderateScale(50)
  },
  playButton: {
    marginBottom: scale(10)
  },
  githubButton: {
    marginBottom: scale(50),
    backgroundColor: '#DC143C'
  },
  imageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { startGameSelection })(MainMenu);