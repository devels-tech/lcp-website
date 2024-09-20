import { collection, doc } from 'firebase/firestore'
import { db } from '@/lib/services/firebase/client'

// Reservaciones
export const RESERVATION_STATUS_REF = doc(db, 'reservations', 'status')
export const RESERVATION_FIRST_WORSHIP_REF = doc(db, 'reservations', 'firstWorship')
export const RESERVATION_SECOND_WORSHIP_REF = doc(db, 'reservations', 'secondWorship')
export const RESERVATION_THIRD_WORSHIP_REF = doc(db, 'reservations', 'thirdWorship')

export const RESERVATIONS_DB_REF = collection(db, 'reservations')
export const USERS_RESERVATION_DB_REF = collection(db, 'reservations', 'usersReservation', 'content')
export const EVENTS_DB_REF = collection(db, 'events')

// Blog
export const CATEGORIES_DB_REF = collection(db, 'blog', 'categories', 'content')
export const TAGS_DB_REF = collection(db, 'blog', 'tags', 'content')
export const ARTICLES_DB_REF = collection(db, 'blog', 'articles', 'content')

// Tienda
export const PRODUCTS_DB_REF = collection(db, 'shop', 'products', 'content')

// Formularios/Registros - Eventos
export const EDC_DB_REF = collection(db, 'events', 'edc', 'usersReservation')
export const INSTITUTE_DB_REF = collection(db, 'events', 'institute', 'usersReservation')
export const BAUTIZOS_DB_REF = collection(db, 'events', 'bautizos', 'usersReservation')
export const DYC_DB_REF = collection(db, 'events', 'dyc', 'usersReservation')
export const CASTING_DB_REF = collection(db, 'events', 'casting', 'usersReservation')
