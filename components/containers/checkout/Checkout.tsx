import RadioGroup from '@/components/inputs/radio/RadioGroup';
import TextField from '@/components/inputs/textField/TextField';
import { IFormFields } from '@/pages/checkout';
import { Dispatch, SetStateAction } from 'react';
import styles from './Checkout.module.scss';

interface ICheckoutFormProps {
  fields: IFormFields;
  setFields: Dispatch<SetStateAction<IFormFields>>;
}

const Checkout = ({ fields, setFields }: ICheckoutFormProps) => {
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'billing' | 'shipping' | 'payment'
  ) => {
    setFields((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [e.target.name]: e.target.value,
      },
    }));
  };

  return (
    <div className={styles.checkout}>
      <h4>checkout</h4>
      <div className={styles.section}>
        <h6 className="subtitle">billing details</h6>
        <div className={styles.field}>
          <TextField
            placeholder="John Doe"
            label="Name"
            name="name"
            value={fields.billing.name}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'billing');
            }}
          />
        </div>
        <div className={styles.field}>
          <TextField
            placeholder="jdoe@email.com"
            label="Email Address"
            name="email"
            value={fields.billing.email}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'billing');
            }}
          />
        </div>
        <div className={styles.field}>
          <TextField
            placeholder="+1 512-555-5555"
            label="Phone Number"
            name="phone"
            value={fields.billing.phone}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'billing');
            }}
          />
        </div>
      </div>
      <div className={styles.section}>
        <h6 className="subtitle">shipping info</h6>
        <div className={styles.field}>
          <TextField
            placeholder="1234 Any Way"
            label="Your Address"
            name="address"
            value={fields.shipping.address}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'shipping');
            }}
          />
        </div>
        <div className={styles.field}>
          <TextField
            placeholder="10101"
            label="ZIP Code"
            name="zip"
            value={fields.shipping.zip}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'shipping');
            }}
          />
        </div>
        <div className={styles.field}>
          <TextField
            placeholder="Any Town"
            label="City"
            name="city"
            value={fields.shipping.city}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'shipping');
            }}
          />
        </div>
        <div className={styles.field}>
          <TextField
            placeholder="USA"
            label="Country"
            name="country"
            value={fields.shipping.country}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'shipping');
            }}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.field}>
          <RadioGroup
            items={[
              { label: 'e-Money', value: 'e-money' },
              { label: 'Cash', value: 'cash' },
            ]}
            groupName="payment"
            label="Payment Method"
            selected={fields.payment.method}
            handleChangeEvent={(e) =>
              setFields((prev) => {
                return {
                  ...prev,
                  payment: {
                    ...prev.payment,
                    method: e.target.value as 'e-money' | 'cash',
                  },
                };
              })
            }
          />
        </div>
        {fields.payment.method === 'e-money' && (
          <>
            <div className={styles.field}>
              <TextField
                placeholder="111111111"
                label="e-Money Number"
                name="eNumber"
                value={fields.payment.eNumber}
                handleChangeEvent={(e) => {
                  handleFormChange(e, 'payment');
                }}
              />
            </div>
            <div className={styles.field}>
              <TextField
                placeholder="1234"
                label="e-Money PIN"
                name="pin"
                value={fields.payment.pin}
                handleChangeEvent={(e) => {
                  handleFormChange(e, 'payment');
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { Checkout };
