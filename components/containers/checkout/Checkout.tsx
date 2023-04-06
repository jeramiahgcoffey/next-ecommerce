import RadioGroup from '@/components/inputs/radio/RadioGroup';
import TextField from '@/components/inputs/textField/TextField';
import { IFormFields } from '@/pages/checkout';
import { Dispatch, SetStateAction } from 'react';
import styles from './Checkout.module.scss';

interface ICheckoutFormProps {
  fields: IFormFields;
  setFields: Dispatch<SetStateAction<IFormFields>>;
  errors: {
    name: string;
    email: string;
    phone: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    pin: string;
    eNumber: string;
  };
}

const Checkout = ({ fields, setFields, errors }: ICheckoutFormProps) => {
  const formatPhone = (value: string) => {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, '');
    if (phoneNumber.length <= 3) return `${phoneNumber}`;
    else if (phoneNumber.length <= 6)
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const formatNumber = (value: string) => {
    if (!value) return value;
    return value.replace(/[^\d]/g, '');
  };

  const formatZip = (value: string) => {
    if (!value) return value;
    const zip = value.replace(/[^\d]/g, '');
    if (zip.length <= 5) return zip;
    else return `${zip.slice(0, 5)}-${zip.slice(5, 9)}`;
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section: 'billing' | 'shipping' | 'payment'
  ) => {
    let value: string;
    switch (e.target.name) {
      case 'phone':
        value = formatPhone(e.target.value);
        break;
      case 'zip':
        value = formatZip(e.target.value);
        break;
      case 'eNumber':
        value = formatNumber(e.target.value).slice(0, 9);
        break;
      case 'pin':
        value = formatNumber(e.target.value).slice(0, 4);
        break;
      default:
        value = e.target.value;
    }

    setFields((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [e.target.name]: value,
      },
    }));
  };

  return (
    <div className={styles.checkout}>
      <h4>checkout</h4>
      <div className={styles.section}>
        <h6 className="subtitle">billing details</h6>
        <div className={styles.container}>
          <div className={styles.field}>
            <TextField
              placeholder="John Doe"
              label="Name"
              name="name"
              error={errors.name}
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
              error={errors.email}
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
              error={errors.phone}
              value={fields.billing.phone}
              handleChangeEvent={(e) => {
                handleFormChange(e, 'billing');
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h6 className="subtitle">shipping info</h6>
        <div className={styles.field}>
          <TextField
            placeholder="1234 Any Way"
            label="Your Address"
            name="address"
            error={errors.address}
            value={fields.shipping.address}
            handleChangeEvent={(e) => {
              handleFormChange(e, 'shipping');
            }}
          />
        </div>
        <div className={styles.container}>
          <div className={styles.field}>
            <TextField
              placeholder="10101"
              label="ZIP Code"
              name="zip"
              error={errors.zip}
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
              error={errors.city}
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
              error={errors.country}
              value={fields.shipping.country}
              handleChangeEvent={(e) => {
                handleFormChange(e, 'shipping');
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.section}>
        <h6 className="subtitle">payment details</h6>
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
            <div className={styles.container}>
              <div className={styles.field}>
                <TextField
                  placeholder="111111111"
                  label="e-Money Number"
                  name="eNumber"
                  error={errors.eNumber}
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
                  error={errors.pin}
                  value={fields.payment.pin}
                  handleChangeEvent={(e) => {
                    handleFormChange(e, 'payment');
                  }}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export { Checkout };
