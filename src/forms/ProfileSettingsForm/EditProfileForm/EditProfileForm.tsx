import { useFormik } from 'formik';

import { useAppDispatch } from 'hooks/hook';
import { setStep } from 'redux/authSlice/authSlice';

import { validationSchema } from './validationSchema';

import s from './EditProfileForm.module.scss';

interface MyFormValues {
  email: string;
  password: string;
  checkbox: boolean;
}

export const EditProfileForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik<MyFormValues>({
    initialValues: {
      email: '',
      password: '',
      checkbox: false,
    },

    validationSchema,

    onSubmit: (_values) => {
      dispatch(setStep(3));
    },
  });

  const { handleSubmit } = formik;

  return <form onSubmit={handleSubmit} className={s.form}></form>;
};
