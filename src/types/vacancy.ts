export default interface IVacancy {
  id: number;
  photo: string;
  name: string;
  title: string;
  description: string;
  requirements: string[];
  created_at: string;
}
