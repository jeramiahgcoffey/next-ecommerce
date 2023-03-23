import DetailPageCard from '@/components/cards/productCards/DetailPageCard';
import ProductLayout from '@/components/layout/ProductLayout';
import { prisma } from '@/db/prismadb';
import { GetServerSideProps } from 'next';
import { useState } from 'react';

type Product = {
  image: { mobile: string; tablet: string; desktop: string };
  name: string;
  new: boolean;
  description: string;
  price: number;
};

interface IProductPageProps {
  product: Product;
}

export const getServerSideProps: GetServerSideProps<{
  product: Product | null;
}> = async (context) => {
  const productArr = await prisma.product.findMany({
    where: {
      slug: context.params?.slug as string,
    },
  });

  return {
    props: {
      product: productArr[0] || null,
    },
  };
};

const Product = ({ product }: IProductPageProps) => {
  const [qty, setQty] = useState(1);

  if (product === null) return null;
  return (
    <div>
      <h1>Product</h1>
      <DetailPageCard
        name={product.name}
        image={product.image.mobile.slice(1)}
        description={product.description}
        price={product.price}
        quantity={qty}
        setQuantity={setQty}
        addToCart={() => console.log('click')}
      />
    </div>
  );
};

Product.getLayout = function (page: React.ReactNode) {
  return <ProductLayout>{page}</ProductLayout>;
};

export default Product;
