import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IoIosMan } from "react-icons/io";

const Timeline = ({ events }) => {

  return (
    <VerticalTimeline className="vertical-timeline-custom-line">
      {events.map((event) => (
        <VerticalTimelineElement
          key={event.title}
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={event.date}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<IoIosMan />}
        >
          <h3 className="vertical-timeline-element-title text-white">{event.title}</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">{event.local}</h4>
          <p className="text-white">
            {event.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default Timeline
