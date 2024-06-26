import { notFound } from "next/navigation";
import { type ResolvingMetadata, type Metadata } from "next";
import { ProductListByCategoryDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import Image from "next/image";

export const generateMetadata = async (
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const { category } = await executeGraphQL(ProductListByCategoryDocument, {
    variables: { slug: params.slug },
    revalidate: 60,
  });

  return {
    title: `${category?.name || "Categroy"} | ${
      category?.seoTitle || (await parent).title?.absolute
    }`,
    description:
      category?.seoDescription ||
      category?.description ||
      category?.seoTitle ||
      category?.name,
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { category } = await executeGraphQL(ProductListByCategoryDocument, {
    variables: { slug: params.slug },
    revalidate: 60,
  });

  if (!category || !category.products) {
    notFound();
  }

  const { name, products } = category;

  return (
    <div className="mx-auto max-w-7xl p-8 pb-16">
      <h1 className="pb-8 text-xl font-semibold">{name}</h1>
      <div className="grid grid-cols-3">
        {products?.edges.map((product) => (
          <div className="border m-2 p-2" key={product.node.id}>
            <div >
              <h2>{product.node.name}</h2>
              <p>{product.node.category?.name}</p>
              <p>
                {product.node.pricing?.priceRange?.start?.gross.amount}{" "}
                {product.node.pricing?.priceRange?.start?.gross.currency}
              </p>
         
              <Image
                src={product.node.thumbnail?.url || "/no-image.png"} 
                alt={product.node.thumbnail?.alt || ""}
                width={500}
                height={300}
                
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
