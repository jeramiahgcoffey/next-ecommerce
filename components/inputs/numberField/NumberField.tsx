import styles from './NumberField.module.scss';

interface INumberFieldProps {
  name?: string;
  value: number;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleDecrement: () => void;
  handleIncrement: () => void;
}

const NumberField = ({
  name,
  value,
  handleChangeEvent,
  handleDecrement,
  handleIncrement,
}: INumberFieldProps) => {
  return (
    <div>
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
