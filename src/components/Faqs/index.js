// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bg-container">
        <div className="app-container">
          <div className="main-container">
            <h1 className="heading">FAQs</h1>
            <ul className="faqs-container">
              {faqsList.map(eachFAQ => (
                <FaqItem faqsList={eachFAQ} key={eachFAQ.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Faqs
