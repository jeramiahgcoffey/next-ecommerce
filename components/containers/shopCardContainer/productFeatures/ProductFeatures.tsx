import styles from './ProductFeatures.module.scss';

interface IProductFeaturesProps {
  features: string;
}

const ProductFeatures = ({ features }: IProductFeaturesProps) => {
  return (
    <div className={styles.container}>
      <h4>features</h4>
      {features
        .split('\n')
        .map((feature, i) =>
          feature ? <p key={i}>{feature}</p> : <br key={i} />
        )}
    </div>
  );
};

export default ProductFeatures;
