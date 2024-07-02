import { notFound } from "next/navigation";
import Image from "next/image";
import { executeGraphQL } from "@/lib/graphql";
import { HeroCategoriesDocument, ProductListByCollectionDocument } from "@/gql/graphql";
import { HowItWorks } from "@/ui/components/HowItWorks";

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

  const heroCategories = await executeGraphQL(HeroCategoriesDocument, {
    variables: {
      firstSub: 4,
      id: "Q2F0ZWdvcnk6NDU=",
    },
    revalidate: 60,
  });

	if (!heroCategories) {
		notFound();
	}

	const products = data?.collection?.products?.edges.map(({ node: product }) => product);

	return (
		<div className=" ">
   <div className="container">
	 {heroCategories?.categories?.edges.map(({ node: category }) => (
          <div key={category.id} className="rounded-lg s overflow-hidden">
            <div className=" flex flex-col items-center text-center">
              {category.children?.edges && category.children.edges.length > 0 && (
                <div className=" w-full">
                  <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                    {category?.children?.edges.map(({ node: subcategory }) => (
                      <li key={subcategory.id} className=" rounded-lg ">
                        <div className="flex flex-col items-center relative">
                          <Image
                            src={subcategory.backgroundImage?.url || "/no-image.png"}
                            alt={subcategory.name}
                            width={300}
                            height={200}
                            className="object-cover w-full h-96 rounded-md"
                          />
                          <div className="flex justify-center items-center"> 
                            <h5 className="rounded text-md font-semibold text-black mt-2">{subcategory.name}</h5>
                          </div>
                          <p className="text-sm text-gray-300 ">{subcategory.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
            </div>
						
		<HowItWorks />

			<section className="mx-auto max-w-7xl p-8 pb-16 grid  md:grid-cols-2 lg:grid-cols-4"  >
				<h2 className="sr-only">Product list</h2>


				{
					products?.map((product) => (
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
