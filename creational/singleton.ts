class Singleton {
  private static instance: Singleton;

  // prevent construction calls with 'new'
  private constructor() {};

  // controls access to Singleton instance
  public static getInstance() {
    if (!Singleton.instance)
      Singleton.instance = new Singleton();
    return Singleton.instance;
  }

  public someBusinessLogic() {};
}

export = Singleton;