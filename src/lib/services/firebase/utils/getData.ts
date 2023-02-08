import { getDoc, getDocs } from 'firebase/firestore'
import {
  ARTICLES_DB_REF,
  CATEGORIES_DB_REF,
  RESERVATIONS_DB_REF,
  RESERVATION_FIRST_WORSHIP_REF,
  RESERVATION_SECOND_WORSHIP_REF,
  RESERVATION_STATUS_REF,
  RESERVATION_THIRD_WORSHIP_REF,
  TAGS_DB_REF,
  USERS_RESERVATION_DB_REF,
  EVENTS_DB_REF,
  PRODUCTS_DB_REF,
  EDC_DB_REF,
  BAUTIZOS_DB_REF
} from './refs'

// Reservaciones
export const getReservationsDB = async () => await getDocs(RESERVATIONS_DB_REF)
export const getUsersReservationsDB = async () => await getDocs(USERS_RESERVATION_DB_REF)

export const getReservationStatusDB = async () => await getDoc(RESERVATION_STATUS_REF)
export const getReservationFirstWorshipDB = async () => await getDoc(RESERVATION_FIRST_WORSHIP_REF)
export const getReservationSecondWorshipDB = async () => await getDoc(RESERVATION_SECOND_WORSHIP_REF)
export const getReservationThirdWorshipDB = async () => await getDoc(RESERVATION_THIRD_WORSHIP_REF)

// Articulos
export const getArticlesDB = async () => await getDocs(ARTICLES_DB_REF)
export const getTagsDB = async () => await getDocs(TAGS_DB_REF)
export const getCategoriesDB = async () => await getDocs(CATEGORIES_DB_REF)

// Eventos
export const getEventsDB = async () => await getDocs(EVENTS_DB_REF)
export const getEventInscriptionsEDC = async () => await getDocs(EDC_DB_REF)
export const getEventInscriptionsBautizos = async () => await getDocs(BAUTIZOS_DB_REF)

// Tienda
export const gerProductsDB = async () => await getDocs(PRODUCTS_DB_REF)
