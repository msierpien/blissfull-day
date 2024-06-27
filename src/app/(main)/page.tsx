import Image from "next/image";
import { executeGraphQL } from "@/lib/graphql";
import { ProductListByCollectionDocument } from "@/gql/graphql";

export const metadata = {
	title: "Blissful E-commerce Starter Pack",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
};

export default async function Page() {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "featured-products",
		},
		revalidate: 60,
	});

	if (!data.collection?.products) throw Error("No products found");

	const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<div>
		
			<section className="mx-auto max-w-7xl p-8 pb-16 grid  md:grid-cols-2 lg:grid-cols-4"  >
				<h2 className="sr-only">Product list</h2>
				{
					products.map((product) => (
						<div key={product.id} className="flex flex-col items-center">
						   <Image
                src={product.thumbnail?.url || "/no-image.png"} 
                alt={product.thumbnail?.alt || ""}
                width={500}
                height={300}
                
              />
							<h3 className="text-lg font-semibold mt-4">{product.name}</h3>
							<p className="text-sm text-gray-500 mt-2">{product.id}</p>
							<p className="text-lg font-semibold mt-2">{product.pricing?.priceRange?.start?.gross.amount} {product.pricing?.priceRange?.start?.gross.currency}</p>
							
						</div>
					))
				}
			</section>
		</div>
	);
}
