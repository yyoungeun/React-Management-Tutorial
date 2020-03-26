import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit *3,
    overflowX: 'auto' //x축으로 overflow
  },
  table:{
    minWidth: 1080
  }
})

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
  'name': '김철수',
  'birthday': '960405',
  'gender' : '남자',
  'job' : '프로그래머'
},
{
  'id':3,
  'image': 'https://placeimg.com/64/64/3', //64*64
  'name': '이영희',
  'birthday': '970109',
  'gender' : '여자',
  'job' : '회사원'
}]

class App extends Component {
  render(){
    const{ classes } = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {/* 고객컴포넌트 출력 부분 */}
      {customers.map(c => { return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
      </TableBody>
      </Table>
    </Paper>
  );
  }
}

export default withStyles(styles)(App);
