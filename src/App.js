import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';


const customers = [{
  'id':1,
  'image': 'https://placeimg.com/64/64/1', //64*64
  'name': '홍길동',
  'birthday': '951003',
  'gender' : '여자',
  'job' : '대학생'
},
{
  'id':2,
  'image': 'https://placeimg.com/64/64/2', //64*64
  'name': '철수',
  'birthday': '960405',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3', //64*64
  'name': '영희',
  'birthday': '970109',
  'gender' : '여자',
  'job' : '백수'
}]

class App extends Component {
  render(){
  return (
    <div>
      {
        customers.map(c => {
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
            />
          );
       })
     }
    </div>
  );
  }
}

export default App;
