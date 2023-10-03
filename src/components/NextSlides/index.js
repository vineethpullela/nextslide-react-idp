import {Component} from 'react'
import Slides from '../Slides'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NextSlides extends Component {
  state = {slidesList: initialSlidesList, activeTab: initialSlidesList[0]}

  onClickChangeActiveTab = id => {
    const {slidesList} = this.state
    const data = slidesList.filter(each => each.id === id)
    this.setState({activeTab: data[0]})
  }

  onChangeHeadingData = () => {
    const {slidesList} = this.state
    const data = slidesList.map(each => {
      if (each.id === id) {
        return {...each, heading: value}
      } else {
        return each
      }
    })
    this.setState((slidesList: data))
  }

  render() {
    const {slidesList, activeTab} = this.state
    console.log(activeTab)

    return (
      <div className="app-container">
        <div className="header">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
            alt="nxt slides logo"
            className="logo"
          />
          <h1 className="next_slide_text">Nxt Slides</h1>
        </div>

        <button type="button" className="new_button">
          + New
        </button>

        <div className="content-container">
          <div className="slide-container">
            {slidesList.map(each => (
              <Slides
                key={each.id}
                data={each}
                onClickChangeActiveTab={this.onClickChangeActiveTab}
              />
            ))}
          </div>
          <div className="active_slide-container">
            <h1 className="active_slide_heading">{activeTab.heading}</h1>
            <p className="active_slide_description">{activeTab.description}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default NextSlides
