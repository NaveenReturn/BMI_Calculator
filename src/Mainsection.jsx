import  { useState } from 'react';
import Pagination from './Pagination';


const Mainsection = () => {

    const items = [
        // Sample data
        'Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5',
        'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10',
        'Item 11', 'Item 12', 'Item 13', 'Item 14', 'Item 15','Item 16'
      ];
      const [currentPage,setCurrentPage] = useState(1);
      const numberOf = 5;
      const handleChange = (paramsnumber)=>{
         setCurrentPage(paramsnumber)
      }


    const indexfetchdata = currentPage * numberOf;
    //                      10         - 5
    const indexdatalist = indexfetchdata - numberOf;
    const filterslicedata = items.slice(indexdatalist,indexfetchdata)
    

    
 
  return (
    <div className='App'>
     <h1>React Pagination Example</h1>
        <ul>
        {
        filterslicedata.map((item)=>(
           <li key={item}>{item}</li>
        ))
       }
        </ul>
        <Pagination
           totalPage={items.length}
           numberOf={numberOf}
           currentPage={currentPage}
           handleChange={handleChange}
        />
    </div>
  )
}

export default Mainsection