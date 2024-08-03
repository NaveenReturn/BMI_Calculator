
const Pagination = ({totalPage,numberOf,currentPage,handleChange}) => {
      const totalpages = Math.ceil(totalPage / numberOf);

      const handleClick = (paramsnumber)=>{
        handleChange(paramsnumber)
      }
      const renderPage = ()=>{
         const store =[];
         for(let i =1;i<= totalpages;i++){
              store.push(
                <button
                  key={i}
                  onClick={()=>handleClick(i)}
                  className={`${i === currentPage?"active":""}`}
                >
                   {i}
                </button>
              )
         }
         return store;
      }
  return (
    <div>
    <div className="pagination">
       {renderPage()}
    </div>
    </div>
  )
}

export default Pagination