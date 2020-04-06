import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from '@use-expo/font';
import Questions from './components/Questions';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

class Application extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      styles: StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#cffff4',
          alignItems: 'center',
          justifyContent: 'center',
        },
        title: {
          fontSize: 25,
          marginBottom: 25,
          color: '#002930'
        },
        question: {
          color: '#002930',
          marginBottom: 25,
          fontSize: 18
        },
        answer: {
          marginBottom: 50,
          color: 'green'
        }
      }),      
      questions: [
        {
          question: 'Which type of project supports StyleSheet.create(); ?',
          answerTrue: 'React-Native',
          answerFalse: 'React'
        },
        {
          question: 'When creating React stylesheets, do you use hyphens or camelCase?',
          answerTrue: 'camelCase',
          answerFalse: 'hy-phens'
        },
        {
          question: 'Does JavaScript require semi-colons on line endings?',
          answerTrue: 'No, it does not.',
          answerFalse: 'Yes, it does.'
        },
        {
          question: 'Can you log to the console in a React-Native application?',
          answerTrue: 'Yes',
          answerFalse: 'No'
        },
        {
          question: 'How do you read an endpoint in React?',
          answerTrue: 'Use fetch()',
          answerFalse: 'Use read()'
        },
        {
          question: 'Does this quiz fulfill all of the assignment requirements?',
          answerTrue: 'Yes',
          answerFalse: 'No'
        }
      ]
    }
  }
  render() {
    return(
      <View style={this.state.styles.container}>
        <Questions state={this.state} />
      </View>
    );
  }
}

export default Application;