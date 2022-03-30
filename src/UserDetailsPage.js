import React from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';

const UserDetailsPage = () => {
  const userDetails = useSelector(state => state.users.userDetails);

  console.log('in details page:::', userDetails);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Last Name:{userDetails.user.familyName}</Text>
      <Text>First Name:{userDetails.user.givenName}</Text>
      <Text>Full Name:{userDetails.user.name}</Text>
      <Text>Email:{userDetails.user.email}</Text>
      <Image
        source={{uri: userDetails.user.photo}}
        style={{width: 100, height: 100, marginTop: 20}}
      />
    </View>
  );
};

export default UserDetailsPage;
