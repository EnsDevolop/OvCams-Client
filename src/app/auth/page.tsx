import { AuthContainer } from "@/containers/auth";
import AuthLayout from "./layout";

export default function Home() {
  return (
    <AuthLayout>
      <AuthContainer />
    </AuthLayout>
  );
}
