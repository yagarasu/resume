import { parse } from "date-fns";
import { Education } from "../types/education";

import unitecLogo from '../assets/unitec.png';
import cemLogo from '../assets/cem.png';

export const education: Education[] = [
  {
    school: 'UNITEC',
    logo: unitecLogo,
    degree: 'Bachelor\'s Degree, Graphic Design',
    startDate: parse('2006-09', 'yyyy-MM', new Date()),
    endDate: parse('2010-04', 'yyyy-MM', new Date()),
  },
  {
    school: 'Montreal Education Center (Mexico)',
    logo: cemLogo,
    degree: 'Technical Course, Graphic Design',
    startDate: parse('2003-09', 'yyyy-MM', new Date()),
    endDate: parse('2006-06', 'yyyy-MM', new Date()),
  },
];