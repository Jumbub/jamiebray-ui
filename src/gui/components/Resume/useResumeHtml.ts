import { useEffect, useState } from 'react';
import { RESUME_PDF_IFRAME } from '../../constants/personal';

export const useResumeHtml = (please: boolean) => {
  const [html, setHtml] = useState(please ? null : 'notLoading');

  useEffect(() => {
    if (please && (html === null || html === 'notLoading')) {
      fetch(RESUME_PDF_IFRAME).then(data => data.text().then(html => setHtml(html)));
    }
  }, [please, html]);

  return html;
};
