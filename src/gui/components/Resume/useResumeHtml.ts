import { useEffect, useState } from 'react';
import { RESUME_PDF_IFRAME } from '../../constants/personal';

const RESUME_STORAGE_KEY = 'RESUME_PDF_IFRAME';

export const useResumeHtml = () => {
  const [resume, setResume] = useState(null);

  const resumeInStorage = process.browser
    ? window.sessionStorage.getItem(RESUME_STORAGE_KEY)
    : null;

  // Check for cached resume,
  // must happen on second render cycle for client
  useEffect(() => {
    if (process.browser && resume === null && resumeInStorage !== null) {
      setResume(resumeInStorage);
    }
  }, [resume, resumeInStorage]);

  useEffect(() => {
    if (resume === null && resumeInStorage === null) {
      fetch(RESUME_PDF_IFRAME).then(data =>
        data.text().then(html => {
          window.sessionStorage.setItem(RESUME_STORAGE_KEY, html);
          setResume(html);
        }),
      );
    }
  }, [resume, resumeInStorage]);

  return resume;
};
