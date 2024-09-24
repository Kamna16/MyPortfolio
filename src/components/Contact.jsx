import React, { useRef, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { CONTACT } from '../Constants';

function ContactForm() {
  const [state, handleSubmit] = useForm("xjkbwknp");
  // const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const result = await handleSubmit(event);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.form 
      // ref={formRef}
      onSubmit={handleFormSubmit}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 1.5 }}
      className='max-w-md mx-auto mt-10 p-6 text-darkblue-100 bg-transparent shadow-md rounded-md border'
    >
      {state.succeeded && <p className='text-red-600 text-center'>Thanks for getting in touch!</p>}
      <div className='mb-4'>
        <label htmlFor='name' className='block text-sm font-medium text-white'>Name</label>
        <input 
          id='name'
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
          required 
        />
        <ValidationError 
          prefix="Name" 
          field="name"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-sm font-medium text-white'>Email Address</label>
        <input 
          id='email'
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
          required 
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='message' className='block text-sm font-medium text-white'>Message</label>
        <textarea 
          id='message'
          name='message'
          rows='4'
          value={formData.message}
          onChange={handleChange}
          className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm' 
          required 
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>
      <div className='text-center'>
        <button 
          type='submit' 
          disabled={state.submitting}
          className='inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-darkblue-100 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
}

function Contact() {
  return (
    <div className='pb-20'>
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Commit a message for me!
      </motion.h1>
      <ContactForm />
      <div className='text-center tracking-tighter'>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className='my-4'
        >
          {CONTACT.address}
        </motion.p>
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <a className='border-b' href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
