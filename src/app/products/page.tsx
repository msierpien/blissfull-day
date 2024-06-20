
import { fetchData } from '@/actions/fetch-data';
import { Product } from '@/types';

async function Products() {
  const products = await fetchData<Product[]>(
    "https://us-central1-e-commerce-dc716.cloudfunctions.net/getProducts",
    {  cache: 'force-cache',
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY as string,
    }}
  );

  return (
    <div>
      <div className="">
        {products.map((product) => (
          <div key={product.id} className="border border-black m-2">
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;