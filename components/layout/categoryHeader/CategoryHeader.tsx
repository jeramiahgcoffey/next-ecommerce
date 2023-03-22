import styles from './CategoryHeader.module.scss';

const CategoryHeader = ({ name }: { name: string }) => {
  return (
    <>
      <div className={styles.categoryHeader}>
        <h4 className={styles.heading}>{name}</h4>
      </div>
    </>
  );
};

export default CategoryHeader;
