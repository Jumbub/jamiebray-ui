import React from 'react'
import styles from './MockContent.module.scss'
import { LoremIpsum } from 'lorem-ipsum'
import { text } from '@storybook/addon-knobs'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 7,
    min: 3,
  },
})

const Content: React.FC<{ label?: string }> = ({ label }) => {
  return (
    <div className={styles.container}>
      {text(
        label || 'content',
        `Orange content is mock data. ${lorem.generateParagraphs(7)}`
      )}
    </div>
  )
}

export default Content
