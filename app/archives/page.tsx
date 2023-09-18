
const page = ()=>{
  const selectedTag = 1 // TODO
  return (<div className='flex flex-col space-y-2'>
    <div>archives</div>
    <div className='flex gap-2'>
      <span>tag1</span>
      <span>tag2</span>
      </div>
      {selectedTag === 1? <div>1</div>:<div>2</div>}
</div>)
}


export default page