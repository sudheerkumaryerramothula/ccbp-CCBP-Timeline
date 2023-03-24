import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="courseTitle-and-duration-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#171f46" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <li className="courseTagsList-container">
        {tagsList.map(eachTag => (
          <ul className="courseTagItem">
            <p className="name">{eachTag.name}</p>
          </ul>
        ))}
      </li>
    </>
  )
}

export default CourseTimelineCard
