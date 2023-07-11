import { UserInterface } from 'interfaces/user';
import { WashingMachineInterface } from 'interfaces/washing-machine';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  time_slot: any;
  user_id?: string;
  washing_machine_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  washing_machine?: WashingMachineInterface;
  _count?: {};
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  washing_machine_id?: string;
}
