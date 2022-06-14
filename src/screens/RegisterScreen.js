import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator'
import { nameValidator } from '../helpers/nameValidator'
import { mobilenumberValidator } from '../helpers/mobileValidator'
// import firebase from 'firebase';
// import db from "../config"

export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState({ value: '', error: '' })
  const [email, setEmail] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
  const [phonenum, setPhonenum] = useState({ value: '', error: '' })

  // const onSignUpPressed = (name,email,password,phonenum) => {
  //   const nameError = nameValidator(name.value)
  //   const emailError = emailValidator(email.value)
  //   const passwordError = passwordValidator(password.value)
  //   const phonenumError = mobilenumberValidator(phonenum.value)
  //   if (emailError || passwordError || nameError || phonenumError) {
  //     setName({ ...name, error: nameError })
  //     setEmail({ ...email, error: emailError })
  //     setPassword({ ...password, error: passwordError })
  //     setPhonenum({ ...phonenum, error: phonenumError })
  //     return
  //   }

  //     firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password)
  //       .then(() => {
  //         db.collection('users').add({
  //           name: name,
  //           email: email,
  //           password:password,
  //           phonenumber:phonenum,
        
  //         })
  //         .then(() => {
  //           this.props.navigation.navigate('JobList');
  //         })
  //       })
  //       .catch((error) => {
  //         // Handle Errors here.
  //         var errorCode = error.code;
  //         var errorMessage = error.message;
  //         return Alert.alert(errorMessage);
  //       });
  //   }
  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value)
    const emailError = emailValidator(email.value)
    const passwordError = passwordValidator(password.value)
    const phonenumError = mobilenumberValidator(phonenum.value)
    if (emailError || passwordError || nameError || phonenumError) {
      setName({ ...name, error: nameError })
      setEmail({ ...email, error: emailError })
      setPassword({ ...password, error: passwordError })
      setPhonenum({ ...phonenum, error: phonenumError })
      return
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'JobList' }],
    })
  }

  

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Mobile Number"
        returnKeyType="done"
        value={phonenum.value}
        onChangeText={(text) => setPhonenum({ value: text, error: '' })}
        error={!!phonenum.error}
        errorText={phonenum.error}
        keyboardType="numeric"
      />
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
