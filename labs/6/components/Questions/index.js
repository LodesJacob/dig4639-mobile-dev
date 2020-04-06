import React from "react";
import {View, Text, Button} from "react-native";

class Question extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.state = props.state;
        this.state.question = 0;
        this.state.correct = 0;
        console.log(this.state.questions.length);
    }
    incrementQuestion() {
        console.log('AFTER THIS_____________________');
        console.log(this)
        this.setState({question: this.state.question + 1})
        return true;
    }
    answerCorrect() {
        this.setState({correct: this.state.correct + 1})
        this.incrementQuestion()
    }
    render() {
        if (this.state.question === 0) {
            // show the home screen
            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>Quiz!</Text>
                    </View>
                    <Button
                        onPress={this.incrementQuestion.bind(this)}
                        title="Press to Start the Quiz"
                        color="#eb4034"
                        accessibilityLabel="Click to start the quiz"
                        />

                </>
            );
        } else if (this.state.question > this.state.questions.length) {
            // show the score
            return(
                <>
                    <View>
                        <Text style={this.state.styles.title}>End of the Quiz!</Text>
                    </View>
                    <View>
                        <Text style={this.state.styles.title}>{(this.state.correct / this.state.questions.length) * 100}%</Text>
                    </View>
                    <View>
                        <Text>You scored {this.state.correct} out of {this.state.questions.length}</Text>
                    </View>
                </>
            );
        } else {
            // show the question
            return(
                <>
                    <View>
                        <Text style={this.state.styles.question}>{this.state.questions[this.state.question - 1].question}</Text>
                    </View>
                    <View>
                        <Button
                            onPress={this.answerCorrect.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerTrue}
                            accessibilityLabel="Click to choose this answer"
                            style={this.state.styles.answer}
                            />
                    </View>
                    <View>
                        <Button
                            onPress={this.incrementQuestion.bind(this)}
                            title={this.state.questions[this.state.question - 1].answerFalse}
                            accessibilityLabel="Click to choose this answer"
                            style={this.state.styles.answer}
                            />
                    </View>
                </>
            );
        }
        
    }
}

export default Question;