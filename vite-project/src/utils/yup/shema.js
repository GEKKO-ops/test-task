import * as yup from 'yup';

export const SCHEMA = yup.object().shape({
  name: yup
    .string()
    .min(2, 'User name should be at least 2 characters')
    .max(60, 'User name should be at most 60 characters')
    .required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup
    .string()
    .matches(/^[\\+]{0,1}380([0-9]{9})$/, 'Phone number is not valid')
    .required('Phone number is required'),
  position_id: yup.string().required('A radio option is required'),
  photo: yup
    .mixed()
    .test('filePresence', 'A file is required', (value) => {
      const file = value?.[0];
      return !!file;
    })
    .test('fileSize', 'File size must be less than 5MB', (value) => {
      const file = value?.[0];
      return !file || file.size < 5120 * 1024;
    })
    .test('fileType', 'Unsupported File Format, .jpeg, .jpg only', (value) => {
      const file = value?.[0];
      const extension =
        file && file.name
          ? file.name.slice(file.name.lastIndexOf('.')).toLowerCase()
          : '';
      return !file || ['.jpeg', '.jpg'].includes(extension);
    }),
});
