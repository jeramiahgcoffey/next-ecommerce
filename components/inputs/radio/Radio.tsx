import styles from './Radio.module.scss';

interface IRadioProps {
  groupName: string;
  label: string;
  value: string;
  checked: boolean;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Radio = ({
  groupName,
  label,
  value,
  checked,
  handleChangeEvent,
}: IRadioProps) => {
  return (
    <label className={`${styles.radio} ${checked && styles.checked}`}>
      <input
        className={styles.radioInput}
        type="radio"
        name={groupName}
        value={value}
        onChange={handleChangeEvent}
        checked={checked}
      />
      <div className={styles.radioRadio}></div>
      {label}
    </label>
  );
};

export default Radio;
