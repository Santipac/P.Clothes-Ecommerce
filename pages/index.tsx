import { ShopLayout } from '@/components/layouts';
import { ProductList } from '@/components/products';
import { initialData } from '@/database/products';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <ShopLayout
      title="Teslo-Shop | Home"
      pageDescription="The Best Tesla's products in one place"
    >
      <Typography variant="h1" component="h1">
        Store
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 1 }}>
        All Products
      </Typography>
      <ProductList products={initialData.products as any} />
    </ShopLayout>
  );
}
