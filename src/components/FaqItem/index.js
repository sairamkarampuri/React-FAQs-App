// Write your code here.
import {Component} from 'react'
import './index.css'

const plusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImg =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    const {isActive} = this.state

    if (isActive) {
      return (
        <div className="answer-section">
          <hr className="horizonatal-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleIsActive = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImg = () => {
    const {isActive} = this.state
    const imgUrl = isActive ? minusImg : plusImg
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button className="button" type="button" onClick={this.onToggleIsActive}>
        <img className="img" src={imgUrl} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqsList} = this.props
    const {questionText} = faqsList
    return (
      <li className="faq-item">
        <div className="question-section">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImg()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
