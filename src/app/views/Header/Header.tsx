import { cookies } from "next/headers";
import getClient from "~/app/api/getClient";
import DeleteClient from "~/core/DeleteClient";

const Header = async () => {
  let client;

  try {
    client = await getClient(cookies().get("clientId")?.value);
  } catch {
    client = null;
  }

  return (
    <header className="flex w-full h-16 items-center justify-end px-12">
      <DeleteClient clientId={client?.id} />
    </header>
  );
};

export default Header;
