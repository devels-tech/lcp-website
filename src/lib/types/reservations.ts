// export interface IReservations {
//   isActive: boolean
//   firstWorship: {
//     id: 'PRIMER_SERVICIO'
//     label: '1er Servicio (8:30 a.m)'
//     count: number
//     isAviable: boolean
//   }
//   secondWorship: {
//     id: 'SEGUNDO_SERVICIO'
//     label: '2do Servicio (10:15 a.m)'
//     count: number
//     isAviable: boolean
//   }
//   thirdWorship: {
//     id: 'TERCER_SERVICIO'
//     label: '3er Servicio (12:00 p.m)'
//     count: number
//     isAviable: boolean
//   }
//   maxReservations: number
//   isLoading: boolean
// }

export type TWorship = {
  id: string
  hour: string
  schedule: string
  label: string
  total: number
  totalKids: number
}
export interface IReservations {
  FIRST_WORSHIP: TWorship
  SECOND_WORSHIP: TWorship
  MAX_RESERVATIONS: number
  usersReservation?: any[]
  status?: boolean
}

export interface IUseReservations {
  reservations: {
    status: boolean
    usersReservation: any[]
    FIRST_WORSHIP: TWorship
    SECOND_WORSHIP: TWorship
    MAX_RESERVATIONS: number
  }
  reservationsIsLoading: boolean
  reservationsError: string
}

export type TFormReservationsProps = {
  reservations: {
    status: boolean
    usersReservation: any[]
    FIRST_WORSHIP: TWorship
    SECOND_WORSHIP: TWorship
    MAX_RESERVATIONS: number
  }
  reservationsIsLoading?: boolean
  reservationsError?: string
}

export interface IActionPayloadWorship {
  payload: {
    count?: number;
    isAviable?: boolean;
  };
}

export interface IActionPayloadWorships {
  payload: {
    isActive: boolean
    isLoading: boolean
    firstWorshipCount: number
    secondWorshipCount: number
    thirdWorshipCount: number
  }
}

export interface IFormReservationProps {
  reservations: IReservations;
}

export type IReservation = {
  name: string
  fullName: string
  phone: string
  email?: string
  totalReservations: string | number
  scheduleWorship: { selectedOption?: string }
  reservationDate?: string
}

// Ticket Reservation
export type TTicket = {
  email: string
  lastname: string
  name: string
  phone: string
  schedule: string
  chairs: number
  isOpen?: boolean
  isLoading?: boolean
}

export type TActionTicketReducer =
  | { type: 'ticketClose' }
  | { type: 'ticketOpen' }
  | { type: 'ticketLoading'; payload: boolean }
  | { type: 'ticketData'; payload: TTicket }

// FormReservation Types

type TNameRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TLastNameRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TPhoneRules = {
  required: { value: boolean; message: string }
  maxLength: { value: number; message: string }
  minLength: { value: number; message: string }
  pattern: { value: RegExp; message: string }
}

type TEmailRules = {
  pattern: { value: RegExp; message: string }
}

type TTotalReservationsRules = {
  required: { value: boolean; message: string }
}

type TTotalKidsReservationsRules = {
  required: { value: boolean; message: string }
}

type TWorshipSheduleRules = {
  required: { value: boolean; message: string }
}

export interface IFormReservationRules {
  name: TNameRules
  fullName: TLastNameRules
  phone: TPhoneRules
  email: TEmailRules
  chairs: TTotalReservationsRules
  kidChairs?: TTotalKidsReservationsRules
  worship: TWorshipSheduleRules
}

export type TReservationOption = { label: string; value: number }
export type TReservationOptions = TReservationOption[]

/// ////////////////////////////////////////////////////

export type TWorshipId = 'FIRST_WORSHIP' | 'SECOND_WORSHIP'

export interface IDataFormReservation {
  fullName: string
  phone: string
  email: string
  worship: TWorshipId
  chairs: string
  kidChairs: string
}
