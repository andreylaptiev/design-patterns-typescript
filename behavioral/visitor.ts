export {};

// Component interface
interface Restaurant {
  cook(): string;
  deliver(deliver: Delivery): void;
}

// concrete Component (a class to visit)
class ItalianCuisine implements Restaurant {
  cook(): string {
    return 'Italian dish is cooked';
  }

  // method that accepts visitor (delivery guy)
  deliver(deliver: Delivery): void {
    deliver.deliverItCuisine();
  }
}

// concrete Component (a class to visit)
class UkrainianCuisine implements Restaurant {
  cook(): string {
    return 'Ukrainian dish is cooked';
  }

  // method that accepts visitor (delivery guy)
  deliver(deliver: Delivery): void {
    deliver.deliverUaCuisine();
  }
}

// Visitor interface
interface Delivery {
  deliverItCuisine(): string;
  deliverUaCuisine(): string;
}

// concrete Visitor
class RegularDelivery implements Delivery {
  deliverItCuisine(): string {
    return 'Regular delivery from Italian restaurant';
  }

  deliverUaCuisine(): string {
    return 'Regular delivery from Ukrainian restaurant';
  }
}

// concrete Visitor
class ExpressDelivery implements Delivery {
  deliverItCuisine(): string {
    return 'Express delivery from Italian restaurant';
  }

  deliverUaCuisine(): string {
    return 'Express delivery from Ukrainian restaurant';
  }
}

function clientCode() {
  // components
  const itRestaurant = new ItalianCuisine();
  const uaRestaurant = new UkrainianCuisine();

  // visitors
  const regDelivery = new RegularDelivery();
  const expDelivery = new ExpressDelivery();

  itRestaurant.cook(); // 'Italian dish is cooked'
  // italian restaurant accepts visitor to deliver food
  itRestaurant.deliver(regDelivery);

  // same for ukrainian restaurant
  uaRestaurant.cook(); // 'Ukrainian dish is cooked'
  // ukrainian restaurant accepts visitor to deliver food
  uaRestaurant.deliver(expDelivery);
}

clientCode();