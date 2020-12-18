import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { scale, moderateScale } from '../Scaling';


const propTypes = {
  optionDescription: PropTypes.string.isRequired,
  onPressItem: PropTypes.func.isRequired,
};


class QuestionOptionItem extends PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.optionDescription);
  };

  render() {
    const { optionDescription } = this.props;

    return (
      <TouchableOpacity
        onPress={this._onPress}
      >
        <View style={styles.quizOption}>
          <Text style={styles.quizOptionDescription}>{optionDescription}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  quizOption: {
    flex: 1,
    alignSelf: 'stretch',
    minHeight: 32,
    marginTop: 4,
    marginBottom: 4,
    backgroundColor: 'rgba(64, 64, 64,0.8)',
    borderRadius: 8,
  },

  quizOptionDescription: {
    flex: 1,
    padding: scale(12),
    color: '#ffffff',
    fontSize: moderateScale(24),
    fontWeight:'normal',
    textAlign: 'center',
    textShadowColor:'#000000',
    textShadowOffset:{width: 2, height: 2},
    textShadowRadius:0,
  },
});


QuestionOptionItem.propTypes = propTypes;

export default QuestionOptionItem;
