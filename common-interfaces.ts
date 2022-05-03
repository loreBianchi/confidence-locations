export interface Address {
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zip: string;
}

export interface Location {
  active: boolean;
  id: number;
  address: Address;
  latitude: number;
  longitude: number;
  locationId: string;
  locationName: string;
  locationType: string;
  locationUserRole: string;
  newLocation: boolean;
  numberofDevices: number;
  subscriptionActive: boolean;
  description?: string;
  locationDetails?: string;
}