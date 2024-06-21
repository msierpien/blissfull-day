import { executeRestApi } from "@/actions/fetch-data";
import { Product } from "@/types";


export default async function Category({
  params,}: {
    params: { categorySlug: string}
  }) {

    const products = await executeRestApi<Product[]>(
      process.env.NEXT_API_PRODUCTS as string,
      params,
      {
        
        method: 'GET',
      },
    );
console.log(products);
return (
  <div>
  <div className="">
    {products.map((product) => (
      <div key={product.id} className="border border-black m-2">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.categoryName}</p>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
</div>
);

}