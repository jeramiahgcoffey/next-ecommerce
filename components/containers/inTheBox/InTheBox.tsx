import styles from './InTheBox.module.scss';

interface IInTheBoxProps {
  items: { item: string; quantity: number }[];
}

const InTheBox = ({ items }: IInTheBoxProps) => {
  return (
    <div className={styles.container}>
      <h4>In the box</h4>
      <div className={styles.items}>
        {items.map((item) => (
          <div key={item.item} className={styles.item}>
            <span className={styles.quantity}>{item.quantity}x</span>
            {item.item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InTheBox;
