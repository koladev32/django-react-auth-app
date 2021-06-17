export interface AccountResponse {
  id: string;
  email: string;
  username: string;
  is_active: boolean;
  created: Date;
  updated: Date;
  access: string;
  refresh: string;
}
