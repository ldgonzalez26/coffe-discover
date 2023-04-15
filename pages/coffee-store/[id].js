import Link from "next/link";
import { useRouter } from "next/router";

const CoffeeStore = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log("id", id);
  return (
    <>
      CoffeeStore page with id -- {id}
      <Link href='/'>Back to home</Link>
    </>
  );
};

export default CoffeeStore;
