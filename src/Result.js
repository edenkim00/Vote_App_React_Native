import React, { useEffect, useState } from 'react';
import { Alert, TouchableOpacity, ImageBackground, View, Text, Button } from 'react-native';
import { voteResult } from './api/VoteResult';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';
import { set } from 'react-native-reanimated';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { State } from 'react-native-gesture-handler';

function ResultComponent() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [yearGroup, setYearGroup] = useState(false);
  const [result, setResult] = useState('');
  const [volleyball, setVolleyballCount] = useState(0)
  const [basketball, setBasketballCount] = useState(0)
  const [badminton, setBadmintonCount] = useState(0)
  const [count, setCount] = useState({
    volleyball: 0,
    basketball: 0,
    badminton: 0
  })
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    async function isAdmin() {
      const email = await AsyncStorage.getItem('email');
      if (email == 'admin27@pupils.nlcsjeju.kr') {
        setIsAdmin(true);
      }
    }
    isAdmin();
  }, [])
  const checkResult = async () => {
    try {
      setResult('')
      if (date == '') {
        Alert.alert('Please select the date to check.')
        return
      }
      if (yearGroup == '') {
        Alert.alert('Please select the year group to check.')
        return
      }
      const apiResult = await voteResult(new Date(date.valueOf() + 9 * 60 * 60 * 1000).toISOString().substring(0, 10), yearGroup);
      if (apiResult.code == 1000) {
        if (apiResult.result.voteResult) {
          setResult(apiResult.result.voteResult);
          setCount(apiResult.result.count);
          return;
        }
        Alert.alert("Please try again later.");
        return;
      }
      else if (apiResult.code == 6001) {
        Alert.alert("No voting took place on that date.");
        return;
      }
    }
    catch (err) {
      Alert.alert("Please try again later.");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
        <Text style={styles.paddingTop}></Text>
        <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sports Hall</Text>
        <Text style={styles.Title}>court vote system</Text>
        <Text style={styles.Title}>@NLCS.JEJU</Text>
        <View>
          {
            !isAdmin && (
              <Text style={styles.padding}></Text>
            )
          }
        </View>

        <Text style={styles.label}>School</Text>
        <View style={{ borderColor: 'white', borderWidth: 1, width: '80%', marginBottom: 20, }}>
          <RNPickerSelect title="" onValueChange={(value) => {
            setYearGroup(value == 'middleschool' ? 'MS' : 'HS');
            setResult('')
          }}
            placeholder={{
              label: 'Select a year group ▽',
              value: '',
            }}
            items={[
              { label: 'HS', value: 'highschool' },
              { label: 'MS', value: 'middleschool' },
            ]}
            style={{
              inputIOS: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
              inputAndroid: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
              placeholder: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
            }}
          />
        </View>
        <Text style={styles.label}>Date</Text>
        <>
          <TouchableOpacity style={styles.input}
            onPress={() => {
              setOpen(true)
            }}
          >
            <View>
              <Text style={{ color: 'white', fontSize: 15, textAlign: 'center' }}>{new Date(date.valueOf() + 9 * 60 * 60 * 1000).toISOString().substring(0, 10)} ▽</Text>
            </View>
          </TouchableOpacity>
          <DatePicker
            modal
            mode="date"
            open={open}
            date={date}
            onConfirm={(date) => {
              setDate(date);
              setOpen(false);
              setResult('');
            }}
            onCancel={() => {
              setOpen(false);
              setResult('');
            }}
          />
        </>
        <Text style={styles.paddingTop10}></Text>
        <View flexDirection='row' style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10, borderRadius: 2, borderColor: 'white' }}>
          <Text style={{ justifyContent: 'flex-start', fontSize: 20, color: 'yellow', paddingTop: 10, paddingBottom: 10, }}>Vote Result:   </Text>
          <Text style={{ justifyContent: 'flex-start', fontSize: 20, color: '#88FF', paddingTop: 10, paddingBottom: 10, }}>{result}</Text>
        </View>
        {
          isAdmin && (
            <View>
              <View flexDirection='row' style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10, borderRadius: 2, borderColor: 'white' }}>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: 'white', paddingTop: 5, paddingBottom: 5, }}>Basketball vote:   </Text>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: '#88FF', paddingTop: 5, paddingBottom: 5, }}>{count.basketball}</Text>
              </View>
              <View flexDirection='row' style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10, borderRadius: 2, borderColor: 'white' }}>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: 'white', paddingTop: 5, paddingBottom: 5, }}>Volleyball vote:   </Text>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: '#88FF', paddingTop: 5, paddingBottom: 5, }}>{count.volleyball}</Text>
              </View>
              <View flexDirection='row' style={{ width: '60%', justifyContent: 'flex-start', marginLeft: 10, borderRadius: 2, borderColor: 'white' }}>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: 'white', paddingTop: 5, paddingBottom: 5, }}>Badminton vote:   </Text>
                <Text style={{ justifyContent: 'flex-start', fontSize: 15, color: '#88FF', paddingTop: 5, paddingBottom: 5, }}>{count.badminton}</Text>
              </View>
            </View>

          )
        }
        <View style={styles.button}>
          <Button title="Find Result" onPress={checkResult} color='#FFFFFF' />
        </View>
      </ImageBackground >
    </View >
  );
}

export default ResultComponent;