import { Department, Employee } from "../structural/composite";

test(('Single employee work'), () => {
  const accountant = new Employee('Accountant');
  expect(accountant.doWork()).toBe('Accountant is working');
});

test(('Department with a single employee work'), () => {
  const accountingDepartment = new Department('Accounting');
  const accountant = new Employee('Accountant');
  accountingDepartment.addEmployee(accountant);
  expect(accountingDepartment.doWork()).toBe('Accountant is working');
});

test(('Department with few employees work'), () => {
  const accountingDepartment = new Department('Accounting');
  const chiefAccountant = new Employee('Chief Accountant');
  accountingDepartment.addEmployee(chiefAccountant);
  const assistantAccountant = new Employee('Assistant Accountant');
  accountingDepartment.addEmployee(assistantAccountant);
  expect(accountingDepartment.doWork()).toBe(
    'Chief Accountant is working.Assistant Accountant is working'
  );
});