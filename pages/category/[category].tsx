import CategoryPageCard from '@/components/cards/productCards/CategoryPageCard';
import ShopCardContainer from '@/components/containers/shopCardContainer/ShopCardContainer';
import CategoryLayout from '@/components/layout/CategoryLayout';
import { prisma } from '@/db/prismadb';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';
import styles from './Category.module.scss';

type Product = {
  id: string;
  category: string;
  name: string;
  description: string;
  image: { desktop: string; mobile: string; tablet: string };
  new: boolean;
};

interface ICategoryPageProps {
  products: Product[];
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { category: 'headphones' } },
      { params: { category: 'speakers' } },
      { params: { category: 'earphones' } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<{ products: Product[] }> = async (
  context
) => {
  const products = await prisma.product.findMany({
    where: {
      category: context.params?.category as string,
    },
  });

  return {
    props: {
      products,
    },
  };
};

const Category = ({ products }: ICategoryPageProps) => {
  console.log(products);

  return (
    <div className={styles.category}>
      <div className={styles.cards} id="categoryPageProductCards">
        {products.map((product) => (
          <CategoryPageCard
            key={product.id}
            name={product.name}
            image={product.image.desktop.slice(1)}
            description={product.description}
            isNew={product.new}
          />
        ))}
      </div>
      <ShopCardContainer />
    </div>
  );
};

Category.getLayout = function (page: ReactNode) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default Category;
