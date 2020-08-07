import React from "react"
import TimelineItem from './TimelineItem'

const Timeline = ({ events }) => {

  return (
    <div>
      {events.map((event, index) => (
        <TimelineItem
          key={event.title}
          title={event.title}
          subtitle={event.local}
          date={event.date}
          image={event.image.childImageSharp.fluid.src}
          imageAlt={event.imageAlt}
          content={event.description}
          reverse={index % 2 === 0 ? false : true}
        />
      ))}
    </div>
  )
}

export default Timeline
