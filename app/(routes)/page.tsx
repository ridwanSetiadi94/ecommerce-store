import getBillboard from "@/actions/get-billboards";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

async function Homepage() {
  const products = await getProducts({ isFeatured: true });
  const billboardId = process.env.NEXT_PUBLIC_BILLBOARDID;
  if (!billboardId) {
    throw new Error(
      "NEXT_PUBLIC_BILLBOARDID environment variable is not defined"
    );
  }
  const billboard = await getBillboard(billboardId);
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}

export default Homepage;
