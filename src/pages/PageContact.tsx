import React from 'react';
import ContactForm from '../components/Contact/ContactForm.tsx';

const PageContact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 flex justify-center items-start">
      <div className="w-full max-w-3xl">
        <ContactForm />
      </div>
    </div>
  );
};

export default PageContact;
