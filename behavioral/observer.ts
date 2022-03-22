export {};

interface Subject {
  actualMagazineEp: number;
  actualComicsEp: number;
  subscribe(o: Observer): void;
  unsubscribe(o: Observer): void;
  notify(subs: Observer[]): void;
}

class PublishingHouse implements Subject {
  private magazineSubs: Observer[];
  actualMagazineEp: number;
  comicsSubs: Observer[];
  actualComicsEp: number;

  constructor(actualMagazineEp: number, actualComicsEp: number,
    magazineSubs: Observer[] = [], comicsSubs: Observer[] = []) {
    this.actualMagazineEp = actualMagazineEp;
    this.actualComicsEp = actualComicsEp;
    this.magazineSubs = magazineSubs;
    this.comicsSubs = comicsSubs;
  }

  subscribe(o: Observer): void {
    if (o instanceof MagazineObserver && !this.magazineSubs.includes(o)) {
      this.magazineSubs.push(o);
    } else if (o instanceof ComicsObserver && !this.comicsSubs.includes(o)) {
      this.comicsSubs.push(o);
    }
  }

  unsubscribe(o: Observer): void {
    if (this.magazineSubs.includes(o)) {
      const index = this.magazineSubs.indexOf(o);
      this.magazineSubs.splice(index, 1);
    } else if (this.comicsSubs.includes(o)) {
      const index = this.comicsSubs.indexOf(o);
      this.comicsSubs.splice(index, 1);
    } else {
      throw 'No such subscriber';
    }
  }

  notify(subs: Observer[]) {
    for (let sub of subs) {
      sub.update(this);
    }
  }

  newMagazineEp(): void {
    this.actualMagazineEp += 1;
    this.notify(this.magazineSubs);
  }

  newComicsEp(): void {
    this.actualComicsEp += 1;
    this.notify(this.comicsSubs);
  }
}

interface Observer {
  update(subject: Subject): void;
}

// concrete observer
class MagazineObserver implements Observer {
  lastMagazineEp: number;

  constructor(lastMagazineEp: number) {
    this.lastMagazineEp = lastMagazineEp;
  }

  update(subject: Subject): void {
    if (subject.actualMagazineEp > this.lastMagazineEp) {
      this.lastMagazineEp = subject.actualMagazineEp;
      this.buyNewMagEp();
    }
  }

  buyNewMagEp(): string {
    return 'Magazine observer bought new magazine episode';
  }
}

// concrete observer
class ComicsObserver implements Observer {
  lastComicsEp: number;

  constructor(lastComicsEp: number) {
    this.lastComicsEp = lastComicsEp;
  }

  update(subject: Subject): void {
    if (subject.actualComicsEp > this.lastComicsEp) {
      this.lastComicsEp = subject.actualComicsEp;
      this.buyNewComicsEp();
    }
  }

  buyNewComicsEp(): string {
    return 'Comics observer bought new comics episode';
  }
}

function clientCode() {
  // create observers (subscribers)
  let magazineSubscriber = new MagazineObserver(1);
  let comicsSubscriber = new ComicsObserver(2);

  // create publishing house and add subscribers
  let publishingHouse = new PublishingHouse(3, 3);
  publishingHouse.subscribe(magazineSubscriber);
  publishingHouse.subscribe(comicsSubscriber);

  // add new comics episode and notify subs
  publishingHouse.newComicsEp(); // actualComicsEp = 3 -> 4
  // notified comics subscribers buy new comics episode
  comicsSubscriber.lastComicsEp; // lastComicsEp = 2 -> 4
}

clientCode();