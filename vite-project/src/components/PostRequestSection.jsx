import { useForm } from 'react-hook-form';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA } from '../utils/yup/shema';
import { createUser } from '../services/apiServices';
import TextField from '@mui/material/TextField';
import { RadioButtonsGroup } from './RadioButtonsGroup';
import successImage from '../assets/success-image.svg';

export const PostRequestSection = ({ setIsPostSuccess, isPostSuccess }) => {
  const [fileName, setFileName] = useState('Upload your photo');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(SCHEMA),
    mode: 'all',
  });

  const onSubmit = async (data) => {
    data.position_id = parseInt(data.position_id);
    data.photo = data.photo[0];
    const formdata = new FormData();
    formdata.append('name', data.name);
    formdata.append('email', data.email);
    formdata.append('phone', data.phone);
    formdata.append('position_id', data.position_id);
    formdata.append('photo', data.photo);
    try {
      const submit = await createUser(formdata);
      setIsPostSuccess(submit.success);
    } catch (error) {
      console.error('Create user error:', error);
    }
  };

  return (
    <section className='section postRequest_section'>
      {!isPostSuccess ? (
        <div className='container postRequest_container'>
          <h1>Working with POST request</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='input-field'>
              {!errors.name ? (
                <TextField
                  fullWidth
                  id='name'
                  label='Your name'
                  type='text'
                  helperText=' '
                  {...register('name')}
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  id='name'
                  label='Your name'
                  type='text'
                  helperText={errors.name.message}
                  {...register('name')}
                />
              )}
            </div>
            <div className='input-field'>
              {!errors.email ? (
                <TextField
                  fullWidth
                  id='email'
                  label='Email'
                  type='text'
                  helperText=' '
                  {...register('email')}
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  id='email'
                  label='Email'
                  type='text'
                  helperText={errors.email.message}
                  {...register('email')}
                />
              )}
            </div>
            <div className='input-field'>
              {!errors.phone ? (
                <TextField
                  fullWidth
                  id='pone'
                  label='Phone'
                  type='text'
                  helperText='+38 (XXX) XXX - XX - XX'
                  {...register('phone')}
                />
              ) : (
                <TextField
                  fullWidth
                  error
                  id='pone'
                  label='Phone'
                  type='text'
                  helperText={errors.phone.message}
                  {...register('phone')}
                />
              )}
            </div>
            <div className='input-field'>
              <RadioButtonsGroup {...register('position_id')} />
            </div>
            <div className='input-field'>
              <label className='input-file'>
                <span
                  className={`input-file-btn ${errors.photo ? 'error_border' : ''}`}
                >
                  Upload
                </span>
                <input
                  type='file'
                  id='photo'
                  {...register('photo', {
                    onChange: (event) => {
                      handleFileChange(event);
                    },
                  })}
                />
                <span
                  className={`input-file-text ${errors.photo ? 'error_border' : ''}`}
                  type='text'
                >
                  {fileName}
                </span>
              </label>
              <div className='error'>
                {errors.photo && <p>{errors.photo.message}</p>}
              </div>
            </div>
            <button
              className={`${!isValid ? 'disable' : ''}`}
              type='submit'
              disabled={!isValid}
            >
              Sign up
            </button>
          </form>
        </div>
      ) : (
        <div className='container postRequest_container'>
          <h1>User successfully registered</h1>
          <img src={successImage} alt='success-image' />
        </div>
      )}
    </section>
  );
};

PostRequestSection.propTypes = {
  setIsPostSuccess: PropTypes.func.isRequired,
  isPostSuccess: PropTypes.bool.isRequired,
};
