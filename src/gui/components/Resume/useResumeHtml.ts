import { createContext, useEffect } from 'react';
import useFetch from 'use-http';
import { RESUME_PDF_IFRAME } from '../../constants/personal';

export const useResumeHtml = () => {
  const [request] = useFetch(RESUME_PDF_IFRAME);

  useEffect(() => {
    request.get();
  }, [request]);

  if (request.error || request.loading) return null;
  if (!request.data) return null;

  return request.data;
};
