
import { executeRestApi } from '@/actions/fetch-data';
import { Product } from '@/types';


async function Products() {
const products = await executeRestApi<Product[]>(
  process.env.NEXT_API_PRODUCTS as string,
  {
    
    method: 'GET',
  },
);

  return (
    <div>
      <div className="">
        {products.map((product) => (
          <div key={product.id} className="border border-black m-2">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <p>{product.categoryName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;