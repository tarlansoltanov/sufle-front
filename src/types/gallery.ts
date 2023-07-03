export default interface IGallery {
  id: number;
  title: string;
  type: 'video' | 'image';
  url: string;
}
