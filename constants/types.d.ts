interface DailyRoute {
  _id: string;
  vehicle: { number: string }
  departurePlace: string;
  destinationPlace: string;
  primaryDriver: Driver | null;
  secondaryDriver: Driver | null;
  cleaner: Cleaner | null;
  departureTime: string;
  instructions: string;
  status: "STARTED" | "COMPLETED"
}

interface Package {
  _id: string;
  vehicle: {
    _id: string;
    number: string;
    seatingCapacity: number;
    model: string;
    bodyType: string;
    chassisBrand: string;
    location: string;
    contactNumber: string;
    photos: string[];
    isAC: boolean;
    isForRent: boolean;
    isForSell: boolean;
    type: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    PUC: string;
    RC: string;
    fitness: string;
    insurance: string;
    permit: string;
    tax: string;
    services: any[];
  };
  otherVehicle: string;
  customerName: string;
  mobileNumber: string;
  alternateNumber: string;
  kmStarting: string;
  perKmRateInINR: number;
  advanceAmountInINR: number;
  remainingAmountInINR: number;
  advancePlace: string;
  departurePlace: string;
  destinationPlace: string;
  departureTime: string;
  returnTime: string;
  tollInINR: number;
  otherStateTaxInINR: number;
  note: string;
  instructions: string;
  createdAt: string;
  updatedAt: string;
  status: "STARTED" | "COMPLETED"
}