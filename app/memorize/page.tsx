import getAllNewWords from "../actions/getAllNewWords"
import ClientOnly from "../components/ClientOnly"
import MemoizeGrid from "./MemoizeGrid"


export default async function Page()
{

  const data = await getAllNewWords()

  return (
    <ClientOnly>
      <MemoizeGrid newWords={ data?.notes} />
    </ClientOnly>
  )
}