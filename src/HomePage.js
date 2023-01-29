import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, View, Text, Button } from 'react-native';
import { vote } from './api/Vote';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import DatePicker from 'react-native-date-picker';

function HomeComponent({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [sports, setSports] = useState('');
  // TODO : grade deafult값 계산되도록 변경하기
  const handleVote = async () => {
    if (date == '') {
      alert('날짜를 선택해주세요.')
      return
    }
    if (sports == '') {
      alert('투표하실 종목을 선택해주세요.')
      return
    }

    const apiResult = await vote(date, sports);
    if (apiResult.code == 1000) {
      alert("투표가 반영되었습니다.");
    }
    else if (apiResult.code == 1001) {
      alert("다시 시도해주세요.");
    }
    else if (apiResult.code == 4001) {
      alert("일시적인 오류로 투표가 반영되지 않았습니다. 나중에 다시 시도해주세요.");
    }
    else if (apiResult.code == 5001) {
      alert("이미 투표하셨습니다.");
    }
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/backgrounds.jpg')} style={{ ...styles.container, width: '100%', height: '100%' }} >
        <Text style={{ ...styles.Title, fontSize: 40, marginBottom: 20 }}>Sports Hall</Text>
        <Text style={styles.Title}>court vote system</Text>
        <Text style={styles.Title}>@NLCS.JEJU</Text>
        <Text style={styles.padding}></Text>
        <Text style={styles.label}>Date</Text>
        <>
          <TouchableOpacity style={styles.input}
            onPress={() => setOpen(true)}
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
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => { setOpen(false) }}
          />
        </>
        <Text style={styles.label}>Sports</Text>
        <View style={{ borderColor: 'white', borderWidth: 1, width: '80%', marginBottom: 20, }}>
          <RNPickerSelect title="" onValueChange={(value) => setSports(value)}
            placeholder={{
              label: 'Select a sport ▽',
              value: '',
            }}
            items={[
              { label: 'Basketball', value: 'Basketball  ▽' },
              { label: 'Badminton', value: 'Badminton  ▽' },
              { label: 'Volleyball', value: 'Volleyball  ▽' },
            ]}
            style={{
              inputIOS: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
              inputAndroid: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
              placeholder: { textAlign: 'center', color: '#FFFFFF', fontSize: 15, padding: 8 },
            }}
          />
        </View>
        <View style={styles.button}>
          <Button title="Vote" onPress={handleVote} color='#FFFFFF' />
        </View>
      </ImageBackground>
    </View>
  );
}

export default HomeComponent;
