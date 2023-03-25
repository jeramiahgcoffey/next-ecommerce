import styles from './NumberField.module.scss';

interface INumberFieldProps {
  name?: string;
  value: number;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
  dense?: boolean;
}

const NumberField = ({
  name,
  value,
  handleChangeEvent,
  handleDecrement,
  handleIncrement,
  dense = false,
}: INumberFieldProps) => {
  return (
    <div className={`${dense && styles.dense}`}>
      <button onClick={handleDecrement} className={styles.control}>
        <span>-</span>
      </button>
      <input
        className={styles.input}
        type="number"
        name=""
        value={value}
        onChange={handleChangeEvent}
      />
      <button onClick={handleIncrement} className={styles.control}>
        <span>+</span>
      </button>
    </div>
  );
};

export default NumberField;
