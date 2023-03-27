import Radio from './Radio';
import styles from './RadioGroup.module.scss';

interface IRadioGroupProps {
  groupName: string;
  items: { value: string; label: string }[];
  selected: string;
  label: string;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  items,
  selected,
  groupName,
  label,
  handleChangeEvent,
}: IRadioGroupProps) => {
  return (
    <div>
      <div className={styles.labelContainer}>
        <label className={`${styles.label}`}>{label}</label>
      </div>
      {items.map((item) => (
        <Radio
          key={item.value}
          groupName={groupName}
          value={item.value}
          label={item.label}
          checked={item.value === selected}
          handleChangeEvent={handleChangeEvent}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
