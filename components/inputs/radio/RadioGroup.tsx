import Radio from './Radio';

interface IRadioGroupProps {
  groupName: string;
  items: { id: string; value: string; label: string }[];
  selected: string;
  handleChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioGroup = ({
  items,
  selected,
  groupName,
  handleChangeEvent,
}: IRadioGroupProps) => {
  return (
    <div>
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
