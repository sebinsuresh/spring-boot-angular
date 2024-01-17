import { Employee } from 'src/types/employee';

export type ModalTypes = 'add' | 'edit' | 'delete';

export type ModalEventTypes = 'open' | 'confirm' | 'cancel';

export type EmployeeModalEvent = {
  modal: ModalTypes;
  event: ModalEventTypes;
  data?: Employee;
};
