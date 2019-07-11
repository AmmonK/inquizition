import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import data from './data/data2';
import CorrectButton from './CorrectButton';
import IncorrectButton from './IncorrectButton';

export default class Quiz extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      questions:data,
      currentQuestion:0,
      showAnswer:false,
      progress: 0
    }
  }

  componentDidMount(){
    this.setState({questions:this.shuffle(this.state.questions)});
  }

  incrementQuestion = () => {    
    this.setState({currentQuestion : this.state.currentQuestion + 1,showAnswer:false})
  }

  decrementQuestion = () => {    
    this.setState({currentQuestion : this.state.currentQuestion - 1,showAnswer:false})
  }

  markCorrect = () => {
    let tmp = this.state.questions;
    tmp[this.state.currentQuestion].correct = true;
    let progress = tmp.filter(x => x.correct==true).length / tmp.length;
    this.setState({questions:tmp,progress: progress});
  }

  markIncorrect = () => {
    let tmp = this.state.questions;
    tmp[this.state.currentQuestion].correct = false;
    let progress = tmp.filter(x => x.correct==true).length / tmp.length;
    this.setState({questions:tmp,progress: progress});
  }

  shuffle(arr){    
    arr.sort(() => Math.random() - 0.5);
    return arr;
  }

  render() {
    return (
      <>
        <LinearProgress variant="determinate" value={this.state.progress*100} />
      <Card>      
        <CardContent>
          <Typography variant="h4" color="primary">Question #{this.state.currentQuestion+1} of {this.state.questions.length}</Typography>
          <Divider />
          <p>{this.state.questions[this.state.currentQuestion].q}</p>          
          {this.state.showAnswer && <div dangerouslySetInnerHTML={{__html:this.state.questions[this.state.currentQuestion].a}}></div>}
          {!this.state.showAnswer && <Button color="default" onClick={() => this.setState({showAnswer:true})}>show answer</Button>}     
        </CardContent>
        <CardActions>
          <CorrectButton mark={() => this.markCorrect()}/>
          
          <IncorrectButton mark={() => this.markIncorrect()}/>

          <Button variant="contained" onClick={() => this.decrementQuestion()}disabled={this.state.currentQuestion <1}>Prev</Button>
          
          <Button variant="contained" onClick={() => this.incrementQuestion()}disabled={!(this.state.currentQuestion < this.state.questions.length-1)}>Next</Button>

        </CardActions>
      </Card>
      </>
    )
  }
}