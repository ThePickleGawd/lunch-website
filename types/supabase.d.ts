export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tags: {
        Row: {
          ble_addr: string
          student_id: string | null
          updated_at: string | null
        }
        Insert: {
          ble_addr: string
          student_id?: string | null
          updated_at?: string | null
        }
        Update: {
          ble_addr?: string
          student_id?: string | null
          updated_at?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
