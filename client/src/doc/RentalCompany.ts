/*
Task

- Mamy wieloodziałową wypożyczalnię samochodów. 
- W każdym oddziale może być jedna lub kilka osób odpowiedzialnych za zarządzanie pojazdami. 
- Pojazdy są różnych typów, mogą to być samochody, rowery, skutery, hulajnogi i w przyszłości inne.
*/


/*
Entites

Branches
Managers
Vehicles
*/

enum VehicleStatus {
  Available = 'available',
  Rented = 'rented',
  //TODO: Unavailable? Like when a vehicle has a repair or for some other reason is unavailable
}

class Branch {
  id: number;
  name: string;
  location: string;
  vehicles: Vehicle[] = [];
  managers: Manager[] = [];

  constructor(
    id: number,
    name: string,
    location: string
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
  }

  addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);
  }

  addManager(manager: Manager): void {
    this.managers.push(manager);
  }

  getAvailableVehicles(): Vehicle[] {
    return this.vehicles.filter(vehicle => vehicle.status === VehicleStatus.Available);
  }
}

class Manager {
  id: number;
  branchId: number;
  name: string;

  constructor(
    id: number,
    branchId: number,
    name: string
  ) {
    this.id = id;
    this.branchId = branchId;
    this.name = name;
  }

  manageVehicle(
    vehicle: Vehicle,
    action: 'rentVehicle' | 'returnVehicle'
  ): void {
    const actions = {
      rentVehicle: vehicle.rentVehicle,
      returnVehicle: vehicle.returnVehicle
    };

    if (!actions.hasOwnProperty(action)) {
      console.log('Invalid action');
      return;
    }

    actions[action]();
  }
}

class Vehicle {
  id: number;
  branchId: number;
  type: string;
  model: string;
  brand: string;
  status: VehicleStatus;
  //TODO: ASK if a vehicle has a driver?

  constructor(
    id: number,
    branchId: number,
    type: string,
    model: string,
    brand: string,
    status: VehicleStatus = VehicleStatus.Available
  ) {
    this.id = id;
    this.branchId = branchId;
    this.type = type;
    this.model = model;
    this.brand = brand;
    this.status = status;
  }

  rentVehicle(): void {
    if (this.status === VehicleStatus.Available) {
      this.status = VehicleStatus.Rented;
      return;
    };

    console.log(`${this.id} isn't available for rent.`);
  }

  returnVehicle(): void {
    if (this.status === VehicleStatus.Rented) {
      this.status = VehicleStatus.Available;
      return;
    };

    console.log(`${this.id} wasn't rented.`);
  }
}