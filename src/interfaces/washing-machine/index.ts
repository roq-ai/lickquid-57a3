import { BookingInterface } from 'interfaces/booking';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface WashingMachineInterface {
  id?: string;
  size: string;
  type: string;
  status: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  organization?: OrganizationInterface;
  _count?: {
    booking?: number;
  };
}

export interface WashingMachineGetQueryInterface extends GetQueryInterface {
  id?: string;
  size?: string;
  type?: string;
  status?: string;
  organization_id?: string;
}
