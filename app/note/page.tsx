import ClientOnly from "../components/ClientOnly";
import CreateNote from "./CreateNote";

export default function Page() {
  return (
    <ClientOnly>
      <CreateNote />
    </ClientOnly>
  )
}