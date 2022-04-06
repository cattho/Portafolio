import React from 'react'
import { TagCloud } from 'react-tagcloud'

const data = [
  { value: 'jQuery', count: 30 },
  { value: 'JavaScript', count: 30 },
  { value: 'React', count: 30 },  
  { value: 'HTML5', count: 30 },
  { value: 'CSS3', count: 30 },
  { value: 'Webpack', count: 30 },  
  { value: 'Git', count: 30 },
  { value: 'Firebase', count: 30 },
  { value: 'NPM', count: 30 },
  { value: 'SCRUM', count: 30 },
  { value: 'React-REDUX', count:30}
]


const customRenderer = (tag, size, color) => (
  <span
    key={tag.value}
    style={{
      animation: 'blinker 5s linear infinite',
      animationDelay: `${Math.random() * 2}s`,
      fontSize: `${size / 2}em`,
      border: `2px solid ${color}`,
      margin: '3px',
      padding: '3px',
      display: 'inline-block',
      color: 'white',
    }}
  >
    {tag.value}
  </span>
)

export default () => (
  <TagCloud tags={data} minSize={1} maxSize={5} renderer={customRenderer} />
)

