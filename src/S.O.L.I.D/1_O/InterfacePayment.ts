export interface Payment {
  payment(password: string, method: string): string;
  method: string;
}