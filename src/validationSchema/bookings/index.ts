import * as yup from 'yup';

export const bookingValidationSchema = yup.object().shape({
  time_slot: yup.date().required(),
  user_id: yup.string().nullable(),
  washing_machine_id: yup.string().nullable(),
});
