import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch} from 'react-redux';
import UserDetailsPage from './UserDetailsPage';
import {USER_DATA} from './store/actions/UserActions';

const LoginPage = () => {
  const [toDetailsPage, setToDetailsPage] = useState(false);
  const [userInput, setUserInput] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch({
        type: USER_DATA,
        payload: userInfo,
      });
      setToDetailsPage(true);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log(' user cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('ign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('play services not available or outdated');
      } else {
        // some other error happened
        console.log('some other error', error);
      }
    }
  };

  const handleTextChange = (text, type) => {
    setUserInput({...userInput, [type]: text});
  };

  const handleButtonPress = () => {
    console.log('userinput::', userInput);
    let userobj = {user: userInput};
    dispatch({
      type: USER_DATA,
      payload: userobj,
    });
    setToDetailsPage(true);
  };

  return (
    <>
      {toDetailsPage ? (
        <UserDetailsPage />
      ) : (
        <View style={styles.container}>
          <Text style={{fontSize: 20, margin: 40}}>Login</Text>
          <TextInput
            placeholder="Name"
            style={styles.input}
            onChangeText={text => handleTextChange(text, 'name')}
          />
          <TextInput
            placeholder="Email"
            style={styles.input}
            onChangeText={text => handleTextChange(text, 'email')}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            onChangeText={text => handleTextChange(text, 'email')}
          />

          <Button title="Login Here" onPress={handleButtonPress} />
          <GoogleSigninButton
            style={{width: 192, height: 48}}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={signIn}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', margin: 40},
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    width: '100%',
    marginBottom: 40,
  },
});

export default LoginPage;
