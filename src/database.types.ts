export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      currencyRates: {
        Row: {
          id: number;
          currency: string;
          rate: number;
        };
        Insert: {
          currency: string;
          rate: number;
        };
        Update: {
          id?: number;
          currency?: string;
          rate?: number;
        };
      };
    };
    Views: object;
    Functions: object;
    Enums: object;
    CompositeTypes: object;
  };
}
