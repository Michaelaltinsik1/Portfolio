'use client';
import Form from '@/base/Form';
import Input from '@/base/Input';
import Textarea from '@/base/TextArea';
import Button from '@/base/Button';
import { sendEmail } from '@/utils/email';
import * as yup from 'yup';

import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from './Loader';
const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = yup.object({
    name: yup.string().required('Provide a name'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Provide a email address'),
    message: yup.string().required('Enter your message'),
  });
  const defaultValues = {
    name: '',
    email: '',
    message: '',
  };
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const response: { isError: boolean; message: string } = await sendEmail({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    if (response.isError) {
      toast.error(
        'Något gick fel. Kontakta oss via email michaelaltinisik1@gmail.com eller ring 0725577888.',
        {
          autoClose: false,
          type: 'error',
          position: 'bottom-right',
          closeOnClick: true,
        }
      );
    } else {
      toast.success('Ditt meddelande har skickats. Vi hör av oss inom kort.', {
        autoClose: 3000,
        type: 'success',
        position: 'bottom-right',
        closeOnClick: true,
      });
    }
    setIsLoading(false);
  };
  return (
    <Form
      defaultValues={defaultValues}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Input
        name="name"
        label="Name"
        placeholder="Michael Altinisik"
        type="text"
        required
      />
      <Input
        name="email"
        label="Email"
        placeholder="Michael.altinisik@hotmail.com"
        type="email"
        required
      />
      <Textarea
        label="Message"
        name="message"
        placeholder="What's on your mind?"
        required
      />
      <Button
        type="submit"
        variant="primary"
        className="desktop:min-w-[250px] desktop:ml-auto"
      >
        {!isLoading ? 'Send' : <Loader />}
      </Button>
    </Form>
  );
};
export default ContactForm;
