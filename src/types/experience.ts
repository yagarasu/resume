export type Experience = {
  place: string;
  logo: string;
  positions: {
    position: string,
    startDate: Date,
    endDate: Date,
    description: string,
  }[];
};