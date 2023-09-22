
import getAllNewWords from "@/app/actions/getAllNewWords";
import ClientOnly from "@/app/components/ClientOnly";
import MemoizeGrid from "./MemoizeGrid";




interface IParams {
  email?: string;
}
export default async function Page({ params }: { params: IParams })  {



  const data = await getAllNewWords(params)

  return (
    <ClientOnly>
      <MemoizeGrid newWords={ data?.words} />
    </ClientOnly>
  )
}