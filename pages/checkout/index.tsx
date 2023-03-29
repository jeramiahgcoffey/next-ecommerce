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

const Checkout = () => {
  const router = useRouter();
  const { cart } = useCart();

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

  return (
    <div className={styles.checkout}>
      <div className={styles.container}>
        <Back />
        <CheckoutForm fields={formFields} setFields={setFormFields} />
        <Summary />
      </div>
    </div>
  );
};

export default Checkout;
