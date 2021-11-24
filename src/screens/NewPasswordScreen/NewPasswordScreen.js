import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {create} from 'react-test-renderer';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();

  const onSubmitPressed = () => {
    navigation.navigate('Home');
  };

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Code" value={code} setValue={setCode} />

        <CustomInput
          placeholder="New password"
          value={newPassword}
          setValue={setNewPassword}
        />

        <CustomButton text="Submmit" onPress={onSubmitPressed} />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },

  title: {fontSize: 24, fontWeight: 'bold', color: '#051C60', margin: 10},
  text: {color: 'gray', marginVertical: 10},
  link: {color: '#FDB075'},
});

export default NewPasswordScreen;