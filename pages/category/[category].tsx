import CategoryPageCard from '@/components/cards/productCards/CategoryPageCard';
import ShopCardContainer from '@/components/containers/shopCardContainer/ShopCardContainer';
import CategoryLayout from '@/components/layout/CategoryLayout';
import { prisma } from '@/db/prismadb';
import useViewport from '@/hooks/useViewport';
import { GetStaticProps } from 'next';
import { ReactNode } from 'react';
import styles from './Category.module.scss';
import { Product as TProduct } from '@prisma/client';

interface ICategoryPageProps {
  products: TProduct[];
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

export const getStaticProps: GetStaticProps<ICategoryPageProps> = async (
  context
) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        category: context.params?.category as string,
      },
      orderBy: {
        price: 'desc',
      },
    });
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        products: [],
      },
      redirect: {
        destination: '/error',
      },
    };
  }
};

const Category = ({ products }: ICategoryPageProps) => {
  const { width } = useViewport();

  const getBreakpoint = (width: number) => {
    if (width >= 1000) {
      return 'desktop';
    } else if (width >= 600) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  };

  return (
    <div className={styles.category}>
      <div className={styles.cards} id="categoryPageProductCards">
        {products.map((product) => (
          <CategoryPageCard
            key={product.id}
            name={product.name}
            image={product.image[getBreakpoint(width)].slice(1)}
            description={product.description}
            slug={product.slug}
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
