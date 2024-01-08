import { Employee } from 'src/types/employee';

export type ModalModes = 'add' | 'edit' | 'delete';

export type EmployeeModalEvent = {
  data: Employee | null;
  mode: ModalModes;
};
