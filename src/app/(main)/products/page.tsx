import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL, ProductsPerPage } from "@/lib/graphql";
import Image from "next/image";

type Props = {
	searchParams: {
		cursor: string;
	};
};

export default async function Page({ searchParams }: Props) {
  const { cursor } = searchParams;

	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor,
		},
		revalidate: 60,
	});

  
 return (
    <div className="mx-auto max-w-7xl p-8 pb-16">
      <h1 className="pb-8 text-xl font-semibold">Wszystkie produkty</h1>
			<div className="grid grid-cols-3">

			{
				products?.edges.map((product) => (
					<div className="border m-2 p-2" key={product.node.id}>
						<div >
							<h2>{product.node.name}</h2>
							<p>{product.node.category?.name}</p>
							<p>{product.node.pricing?.priceRange?.start?.gross.amount} {product.node.pricing?.priceRange?.start?.gross.currency}</p>
							<Image
                src={product.node.thumbnail?.url || "/no-image.png"} 
                alt={product.node.thumbnail?.alt || ""}
                width={500}
                height={300}
                
              />
						</div>
				</div>
					))
					
				}
     
				</div>
    </div>
)
}