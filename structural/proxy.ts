interface BuildingInterface {
  build(): string;
}

class BuildingService implements BuildingInterface {
  building: string;

  constructor(building: string) {
    this.building = building;
  }

  build(): string {
    return `${this.building} is built`;
  }
}

// proxy
class BuildingProxy implements BuildingInterface {
  building: BuildingInterface;

  constructor(building: BuildingInterface) {
    this.building = building;
  }

  countCost(): number {
    const cost = Math.floor(Math.random() * 1_000_000);
    return cost;
  }

  isProfitable(): boolean {
    const profit = (this.countCost() < 500_000) ? true : false;
    return profit;
  }

  build(): string {
    if (this.isProfitable())
      return this.building.build();
    else
      return 'Not profitable. Building rejected';
  }
}

function clientCode() {
  // build straight with BuildingService;
  const buildService = new BuildingService('Factory');
  buildService.build(); // 'Factory is built'

  // decide is it profitable to build with BuildingProxy;
  const building = new BuildingService('Mall');
  const buildProxy = new BuildingProxy(building);
  buildProxy.build(); /* 'Factory is built' or 'Not profitable. Building
    rejected' */
}

clientCode();