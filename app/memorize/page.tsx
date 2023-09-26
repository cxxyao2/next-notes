import getAllNewWords from "../actions/getAllNewWords"
import ClientOnly from "../components/ClientOnly"
import MemoizeGrid from "./MemoizeGrid"


export default async function Page()
{

  const data = await getAllNewWords()

  if(!data?.words) return <div>Congrets! No new words to memorize.</div>

  return (
    <ClientOnly>
      <MemoizeGrid newWords={ data?.words} />
    </ClientOnly>
  )
}