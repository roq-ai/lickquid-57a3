import * as yup from 'yup';

export const washingMachineValidationSchema = yup.object().shape({
  size: yup.string().required(),
  type: yup.string().required(),
  status: yup.string().required(),
  organization_id: yup.string().nullable(),
});
