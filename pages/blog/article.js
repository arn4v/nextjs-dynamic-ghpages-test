import { userouter } from "next/router";

export default function Article() {
  const router = useRouter();
  return <>Slug: {router.query?.slug ?? "undefined"}</>;
}
