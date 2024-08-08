import Link from "next/link";
import { auth } from "../_lib/auth";
import DynamicNav from "./DynamicNav";

export default async function Navigation() {
  const session = await auth();
  return <DynamicNav session={session} />;
}
