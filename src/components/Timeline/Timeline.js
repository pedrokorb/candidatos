import React from "react"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { IoIosBriefcase, IoMdBriefcase, IoIosMan } from "react-icons/io";

const events = [
  {
    date: "21/08/1992",
    title: "Nascimento",
    subtitle: 'Santo Ângelo - RS',
    description: "Nasceu em Santo Ângelo em uma noite fria de inverno. Chorou muito",
    icon: ''
  },
  {
    date: "1992 - 2006",
    title: "Infância",
    subtitle: 'Eugênio de Castro - RS',
    description: "Passou sua infância em Eugênio de Castro. Ali estudou até se formar no ensino fundamental",
    icon: ''
  },
  {
    date: "2006 - 2009",
    title: "Ensino Médio e Técnico",
    subtitle: 'Ijuí - RS',
    description: "Mudou-se para Ijuí para estudar. Fez curso técnico em informática",
    icon: ''
  },
  {
    date: "2010 - 2014",
    title: "Faculdade",
    subtitle: 'Rio Grande - RS',
    description: "Mudou-se para Rio Grande para começar a faculdade em Engenharia de Computação",
    icon: ''
  },
  {
    date: "2015 - 2019",
    title: "Formatura",
    subtitle: 'Santa Maria - RS',
    description: "Transferiu-se para Santa Maria, onde se concluiu o curso de Engenharia de Computação",
    icon: ''
  },
  {
    date: "2019 - Atual",
    title: "Trabalho",
    subtitle: 'Santa Maria - RS',
    description: "Atualmente é Analista de Sistemas na empresa Irriga Global",
    icon: ''
  }
]

const Timeline = () => {

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
          icon={event.icon ? event.icon : <IoIosMan />}
        >
          <h3 className="vertical-timeline-element-title text-white">{event.title}</h3>
          <h4 className="vertical-timeline-element-subtitle text-white">{event.subtitle}</h4>
          <p className="text-white">
            {event.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default Timeline
