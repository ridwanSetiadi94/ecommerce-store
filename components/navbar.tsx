import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";
import getCategories from "@/actions/get-categories";
import NavbarActions from "@/components/navbar-actions";

export const revalidate = 0;

async function Navbar() {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        {/* <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center"> */}
        <div className="relative flex h-16 items-center">
          <Link href={"/"} className="flex gap-x-2">
            <p className="font-bold text-xl">STORE</p>
          </Link>
          <MainNav data={categories} />
          <div className="ml-auto">
            <NavbarActions />
          </div>
          {/* <NavbarActions /> */}
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
