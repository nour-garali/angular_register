import { University } from './university.model';
export class UniversityWrapper{
_embedded!: {
  universities: University[]; university: University[]
};
} 