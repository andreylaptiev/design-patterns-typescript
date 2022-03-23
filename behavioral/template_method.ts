export {};

// abstract morning algorithm class
abstract class AbstractMorning {
  morningTemplate(): void {
    this.wakeUp();
    this.takeShower();
    this.hook1();
    this.eatBreakfast();
    this.hook2();
    this.wearClothes();
    this.goSomewhere();
  }

  protected abstract wakeUp(): string;

  protected takeShower(): string {
    return 'Take shower';
  }
  
  protected hook1(): string | void {};

  protected eatBreakfast(): string {
    return 'Eat breakfast';
  }

  protected hook2(): string | void {};

  protected abstract wearClothes(): string;

  protected abstract goSomewhere(): string;
}

// concrete weekday morning algorithm
class WeekdayMorning extends AbstractMorning {
  protected wakeUp() {
    return 'Wake up at 6 am';
  }

  protected wearClothes() {
    return 'Wear working clothes';
  }

  protected goSomewhere() {
    return 'Go to work';
  }
}

// concrete weekend morning algorithm
class WeekendMorning extends AbstractMorning {
  protected wakeUp() {
    return 'Wake up at 9 am';
  }

  protected hook1() {
    return 'Read magazine';
  }

  protected wearClothes() {
    return 'Wear weekend clothes';
  }

  protected hook2() {
    return 'Watch movie';
  }

  protected goSomewhere() {
    return 'Go out with friends';
  }
}

function clientCode() {
  // weekday morning algorithm
  const weekday = new WeekdayMorning();
  weekday.morningTemplate();

  // weekend morning algorithm
  const weekend = new WeekendMorning();
  weekend.morningTemplate();
}

clientCode();