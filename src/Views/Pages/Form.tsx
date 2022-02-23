import React from 'react';
import { PageContentWrapper } from '../Layout/Layout.style';
import { useForm } from 'react-hook-form';
import HolderTag from '../Components/NewTag/HolderTag';

function Form() {
  const { register, handleSubmit } = useForm();
  const onValid = (data: any) => console.log(data);

  return (
    <PageContentWrapper>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <div className="">
          <input
            {...register('first-name', { required: true })}
            placeholder="email"
          />
        </div>
        <div className="">
          <input
            {...register('First Name', { required: true })}
            placeholder="First Name"
          />
        </div>
        <div className="">
          <input
            {...register('last Name', { required: true })}
            type="text"
            placeholder="last Name"
          />
        </div>
        <div className="">
          <input
            {...register('UserName', { required: true })}
            type="text"
            placeholder="UserName"
          />
        </div>
        <div className="">
          <input
            {...register('checkbox', { required: true })}
            type="checkbox"
            placeholder="Password"
          />
        </div>
        <div className="">
          <input
            {...register('PasswordConfirmation', { required: true })}
            type="text"
            placeholder="PasswordConfirmation"
          />
        </div>
        <div className="">
          <input
            {...register('Email', { required: true })}
            type="text"
            placeholder="Email"
          />
        </div>
        <button>Add</button>
      </form>

      <hr />
      <HolderTag />
    </PageContentWrapper>
  );
}

export default Form;
