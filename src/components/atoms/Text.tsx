import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';

interface TextProps extends RNTextProps {
  style?: TextStyle | TextStyle[];
  children?: React.ReactNode;
}

const Text: React.FC<TextProps> = ({ style, children, ...rest }) => {

  const customStyles: TextStyle = {
    fontFamily: 'Roboto',
  };

  return (
    <RNText {...rest} style={[style, customStyles]}>
      {children}
    </RNText>
  );
};

export default Text;