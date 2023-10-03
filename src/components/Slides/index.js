import './index.css'

const Slides = props => {
  const {data, onClickChangeActiveTab, onChangeHeadingData} = props

  const {id, heading, description} = data
  const onClickChangeTab = () => {
    onClickChangeActiveTab(id)
  }

  const onChangeHeading = event => {
    onChangeHeadingData(id, (heading: event.target.value))
  }

  return (
    <li className="slides-container" onClick={onClickChangeTab}>
      <p className="number">1</p>
      <div className="card-container">
        <h1 className="card-heading" onChange={onChangeHeading}>
          {heading}
        </h1>
        <p className="card-description">{description}</p>
      </div>
    </li>
  )
}

export default Slides
