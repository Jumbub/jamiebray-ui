import React from 'react'
import styles from './MockContent.module.scss'
import { LoremIpsum } from 'lorem-ipsum'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 6,
    min: 3,
  },
  wordsPerSentence: {
    max: 8,
    min: 4,
  },
})

const Content: React.FC = () => {
  return (
    <div className={styles.container}>
      Orange content is mock data. {lorem.generateParagraphs(7)}
    </div>
  )
}

export default Content
