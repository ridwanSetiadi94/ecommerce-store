import getProducts from "@/actions/get-products";
import getSingleProduct from "@/actions/get-single-product";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

async function ProductPage({
  params,
}: ProductPageProps): Promise<React.ReactElement> {
  const { productId } = await params;
  const product = await getSingleProduct(productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  // Exclude the currently viewed product
  const relatedProducts = suggestedProducts.filter(
    (item) => item.id !== productId
  );

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={relatedProducts} />
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;
