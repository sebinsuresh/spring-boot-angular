import { Employee } from 'src/types/employee';

export type ModalModes = 'add' | 'edit' | 'delete';

export type EmployeeModalEvent = {
  data?: Employee;
  mode: ModalModes;
};

export type ModalEvent = {
  modal: ModalModes;
  action: 'open' | 'close';
};
