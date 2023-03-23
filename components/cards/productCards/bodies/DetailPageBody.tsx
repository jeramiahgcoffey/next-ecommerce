import Button from '@/components/inputs/button/Button';
import styles from './DetailPageBody.module.scss';

interface IDetailPageBody {
  name: string;
  description: string;
  isNew: boolean;
}

const DetailPageBody = ({ name, description, isNew }: IDetailPageBody) => {
  return (
    <div className={styles.body}>
      {isNew && (
        <div className={`overline ${styles.overline}`}>new product</div>
      )}
      <h4>{name}</h4>
      <p>{description}</p>
      <div className={styles.button}>
        <Button
          handleClick={() => {
            console.log('click');
          }}
        >
          see product
        </Button>
      </div>
    </div>
  );
};

export default DetailPageBody;
