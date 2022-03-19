interface Company {
  name: string;
  isDepartment(): boolean;
  doWork(): string;
}

class Employee implements Company {
  public name: string;
  private department!: Company | null;

  constructor(name: string) {
    this.name = name;
  }

  isDepartment(): boolean {
    return false;
  }

  doWork(): string {
    return `${this.name} is working`;
  }

  setDepartment(department: Company | null) {
    this.department = department;
  }

  getDepartment(): string {
    if (this.department)
      return this.department.name;
    else
      return 'Unemployed';
  }
}

class Department implements Company {
  public name: string;
  private static employees: Company[];

  constructor(name: string) {
    this.name = name;
    Department.employees = [];
  }

  isDepartment(): boolean {
    return true;
  }

  doWork(): string {
    let results: string[] = [];
    for (let employee of Department.employees) {
      results.push(employee.doWork());
    };
    return results.join('.');
  }

  addEmployee(employee: Employee) {
    Department.employees.push(employee);
    employee.setDepartment(this);
  }

  removeEmployee(employee: Employee) {
    let employeeIndex = Department.employees.indexOf(employee); 
    Department.employees.splice(employeeIndex, 1);
    employee.setDepartment(null);
  }
}

function clientCode() {
  // single employee work
  const employee = new Employee('Accountant');
  employee.doWork();
  // accountant department with few employees work
  const accountingDepartment = new Department('Accounting');
  const chiefAccountant = new Employee('Chief Accountant');
  accountingDepartment.addEmployee(chiefAccountant);
  const assistantAccountant = new Employee('Assistant Accountant');
  accountingDepartment.addEmployee(assistantAccountant);
  accountingDepartment.doWork();
}

clientCode();

export { Department, Employee };