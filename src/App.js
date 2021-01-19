import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {  
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday': '981031',
  'gender': '남자',
  'job': '대학생'   
  },
  {
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길순',
  'birthday': '971031',
  'gender': '여자',
  'job': '개발자'   
  },
  {
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '홍동순',
  'birthday': '961031',
  'gender': '남자',
  'job': '프로그래머'   
  }
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} /> ) })
        }
      </div>
    );
  }
  
}

export default App;
