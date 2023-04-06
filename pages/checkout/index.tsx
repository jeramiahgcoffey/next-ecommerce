import { Checkout as CheckoutForm } from '@/components/containers/checkout/Checkout';
import Summary from '@/components/containers/summary/Summary';
import Back from '@/components/inputs/back/Back';
import useCart from '@/hooks/useCart';
import styles from '@/styles/Checkout.module.scss';
import { useRouter } from 'next/router';
import { useState } from 'react';

export interface IFormFields {
  billing: {
    name: string;
    email: string;
    phone: string;
  };
  shipping: {
    address: string;
    zip: string;
    city: string;
    country: string;
  };
  payment: {
    method: 'e-money' | 'cash';
    eNumber: string;
    pin: string;
  };
}

const initialErrors = {
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  pin: '',
  eNumber: '',
};

const Checkout = () => {
  const router = useRouter();
  const { cart } = useCart();

  const [errors, setErrors] = useState(initialErrors);

  const [formFields, setFormFields] = useState<IFormFields>({
    billing: {
      name: '',
      email: '',
      phone: '',
    },
    shipping: {
      address: '',
      zip: '',
      city: '',
      country: '',
    },
    payment: {
      method: 'e-money',
      eNumber: '',
      pin: '',
    },
  });

  const validateFields = () => {
    let currentErrors = { ...initialErrors };
    for (const section in formFields) {
      const formSection = formFields[section as keyof IFormFields];
      for (const field in formSection) {
        const value = formSection[field as keyof typeof formSection] as string;
        if (value.length >= 115) {
          currentErrors = {
            ...currentErrors,
            [field]: 'Field must have less than 115 characters',
          };
        }
        if (field === 'email') {
          const regex =
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!regex.test(value)) {
            currentErrors = {
              ...currentErrors,
              [field]: 'The email you entered is invalid',
            };
          }
        }
        if (field === 'zip') {
          const regex = /^[0-9]{5}(?:-[0-9]{4})?$/;
          if (!regex.test(value)) {
            currentErrors = {
              ...currentErrors,
              [field]: 'The ZIP code you entered is invalid',
            };
          }
        }
        if (field === 'eNumber') {
          if (value.length !== 9) {
            currentErrors = {
              ...currentErrors,
              [field]: 'The eNumber must be 9 digits',
            };
          }
        }
        if (field === 'pin') {
          if (value.length !== 4) {
            currentErrors = {
              ...currentErrors,
              [field]: 'The PIN must be 4 digits',
            };
          }
        }

        if (!value) {
          currentErrors = {
            ...currentErrors,
            [field]: 'Field cannot be empty',
          };
        }
      }
    }

    if (formFields.payment.method !== 'e-money') {
      currentErrors = {
        ...currentErrors,
        eNumber: '',
        pin: '',
      };
    }

    setErrors(currentErrors);
    return Object.values(currentErrors).every((field) => field === '');
  };

  const handleSubmit = () => {
    console.log(validateFields() ? 'valid' : 'errors');
  };

  return (
    <div className={styles.checkout}>
      <div className={styles.container}>
        <Back />
        <CheckoutForm
          fields={formFields}
          setFields={setFormFields}
          errors={errors}
        />
        <Summary handleCheckout={handleSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
