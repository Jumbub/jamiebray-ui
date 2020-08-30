import { createContext, useEffect } from 'react';
import useFetch from 'use-http';
import { RESUME_PDF_IFRAME } from '../../constants/personal';

export const ResumeContext = createContext<string | null>(null);
