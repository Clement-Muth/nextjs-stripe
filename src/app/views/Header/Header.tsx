import { cookies } from "next/headers";
import getClient from "~/app/api/getClient";
import HeaderContent from "~/app/views/Header/HeaderContent";

const Header = async () => {
  let client;

  try {
    client = await getClient(cookies().get("clientId")?.value);
  } catch {
    client = null;
  }

  return <HeaderContent clientId={client?.id} />;
};

export default Header;
