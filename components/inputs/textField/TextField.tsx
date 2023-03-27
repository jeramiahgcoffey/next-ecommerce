import styles from './TextField.module.scss';

interface ITextFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  error?: string;
  value: string;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField = ({
  label,
  name,
  placeholder,
  error,
  value,
  handleChangeEvent,
  type = 'text',
}: ITextFieldProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label
          className={`${styles.label} ${error && styles.error}`}
          htmlFor={name}
        >
          {label}
        </label>
        <span className={styles.errorMsg}>{error}</span>
      </div>
      <input
        className={`${styles.input} ${error && styles.error}`}
        aria-label={label}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleChangeEvent(e);
        }}
      />
    </div>
  );
};

export default TextField;
