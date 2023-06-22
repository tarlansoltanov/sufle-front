export default interface IShop {
  id: number;
  photo: string;
  name: string;
  address: string;
  phone: string;
  email?: string;
  working_hours: string;
  map_url: string;
  is_main: boolean;
  created_at: string;
}
