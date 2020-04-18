import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import { text } from '@storybook/addon-knobs';
import styles from './MockContent.module.scss';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 5,
    min: 2,
  },
  wordsPerSentence: {
    max: 7,
    min: 3,
  },
});

export const MockContent: React.FC<{ label?: string }> = ({ label }) => (
  <div className={styles.container}>
    {text(label || 'content', `Orange content is mock data. ${lorem.generateParagraphs(7)}`)}
  </div>
);
