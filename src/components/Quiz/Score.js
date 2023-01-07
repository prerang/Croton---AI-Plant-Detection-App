import React from "react";
import { quizData } from "./quizData";
import MainQuiz from "./MainQuix";
import { IonButton } from "@ionic/react";



class Score extends React.Component {
    state = {
        currentQuestion: 0,
        myAnswer: null,
        options: [],
        score: 0,
        disabled: true,
        isEnd: false
    };



    nextQuestionHandler = () => {
        // console.log('test')
        const { myAnswer, answer, score } = this.state;

        if (myAnswer === answer) {
            this.setState({
                score: score + 1
            });
        }

        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        });
        console.log(this.state.currentQuestion);
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.currentQuestion !== prevState.currentQuestion) {
            this.setState(() => {
                return {
                    disabled: true,
                    questions: quizData[this.state.currentQuestion].question,
                    options: quizData[this.state.currentQuestion].options,
                    answer: quizData[this.state.currentQuestion].answer
                };
            });
        }
    }
    //check answer
    checkAnswer = answer => {
        this.setState({ myAnswer: answer, disabled: false });
    };
    finishHandler = () => {
        if (this.state.currentQuestion === quizData.length - 1) {
            this.setState({
                isEnd: true
            });
        }
        if (this.state.myAnswer === this.state.answer) {
            this.setState({
                score: this.state.score + 1
            });
        }
    };
    render() {
        const { options, myAnswer, currentQuestion, isEnd } = this.state;


        return (
            <div>

                <div className="result">
                    <p className="result_head">Congratulations</p>
                    <h3 className="result_subhead">Your Score: {this.state.score} </h3>
                    <IonButton className="score_bn">View your reward</IonButton>
                </div>
                <img className="score_plant" src="https://s3-alpha-sig.figma.com/img/9bc8/8c7e/78218dd6ad4e6bdd73698afc7f90de10?Expires=1673222400&Signature=ePYg1c0foGa2JOiKrciAnEkpRmWmx0BZSu1FJZ55~gb5ZP~En4enuKW~dhQ4MjIM1zHAC0JAlaPymIgqqhlmMWLae8sTNlpD6WE1kMGDceUpm-ksu7l-p-Lj2yC6VYTDY22MuaL0VGhgKcVlM96qxfwy4XOffpFSqDVFEXVu4JBGaijDsud-rOt7U2cKgehAx3gGWlbnJGWjkxpV6YTKgn-He-4qkkait7DfAaA7mylXCGPSnyTM53Hy9HosW2scxTaNncUi4Kgmx9vrfanxZvfMzvWsE~Tx7NVzGQgX1JfZUikMRifIlJaTYvYIQEg9mxGs1kSgX-MlwFovV~BISg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
                <p className="score_well">You scored well!!!</p>
            </div>

        );

    }
}

export default Score;