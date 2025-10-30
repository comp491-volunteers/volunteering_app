// Shared data model types for mobile, backend, and dashboard

export type UserRole = "volunteer" | "coordinator" | "admin";

export interface User {
  userId: string;
  name: string;
  role: UserRole;
  email?: string;
  phone?: string;
  orgId?: string; // optional for coordinators/admins tied to an org
  createdAt: string; // ISO string
}

export interface EventLocation {
  latitude: number;
  longitude: number;
  addressText?: string;
}

export interface Event {
  eventId: string;
  title: string;
  description?: string;
  location: EventLocation;
  startTime: string; // ISO string
  endTime: string; // ISO string
  capacity?: number;
  skillsRequired?: string[];
  orgId: string;
  createdAt: string; // ISO string
}

export type ReservationStatus =
  | "reserved"
  | "checked_in"
  | "checked_out"
  | "approved"
  | "cancelled";

export interface Reservation {
  reservationId: string;
  userId: string;
  eventId: string;
  status: ReservationStatus;
  createdAt: string; // ISO string
  updatedAt: string; // ISO string
}

export interface AttendanceProof {
  proofId: string;
  userId: string;
  eventId: string;
  qrToken: string;
  timestamp: string; // ISO string
  gpsSnapshot?: EventLocation;
  supervisorApproval?: {
    approvedByUserId: string;
    approvedAt: string; // ISO string
    notes?: string;
  };
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
}

export interface ApiError {
  success: false;
  error: string;
}

export type ApiResult<T> = ApiSuccess<T> | ApiError;


