import './index.css'

class Card {
  constructor (props) {
  // stores props
    this.props = props

    // create card
    this.element = document.createElement('div')
    this.element.classList.add('card')
    this.element.setAttribute('data-side', '0')

    // card title
    const title = document.createElement('h3')
    title.classList.add('title')
    title.innerText = this.props.title
    this.element.append(title)

    // card question
    const question = document.createElement('p')
    question.classList.add('question')
    question.innerText = this.props.question
    this.element.append(question)

    // card answer
    const answer = document.createElement('p')
    answer.classList.add('answer')
    answer.innerText = this.props.answer
    this.element.append(answer)

    this.onClick = this.onClick.bind(this)
    this.element.addEventListener('click', this.onClick)
  }

  onClick (e) {
    if (this.element.getAttribute('data-side') === 0) {
      this.element.setAttribute('data-side', '1')
    } else {
      this.element.setAttribute('data-side', '0')
    }
  }

  render () {
    return this.element
  }
}

export default Card
