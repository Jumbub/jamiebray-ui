import { RESUME_PDF_IFRAME } from '../constants/personal';

let preloadedResume = false;

// Preload the iframe by rendering it off to the side somewhere
export const preloadResume = () => {
  if (process.browser && !preloadedResume) {
    const resume = document.createElement('iframe');
    resume.src = RESUME_PDF_IFRAME;
    resume.style.cssText = 'visibility: hidden;';
    document.body.appendChild(resume);
    preloadedResume = true;
  }
};

// Do not preload if already iframed
export const dontPreloadResume = () => {
  preloadedResume = true;
};
