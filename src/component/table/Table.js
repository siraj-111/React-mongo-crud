import React,{useMemo,useEffect,useState} from 'react'
import {useTable,useSortBy,usePagination} from  'react-table'
import Loader from "react-js-loader";
import './table.css'
import {Link} from 'react-router-dom'
import  {COLUMNS} from './columns'
import axios from 'axios'


export const Table = () => {
   
  const [post,setPost]=useState([])

  useEffect(async()=>{
   const post= await axios.get('http://localhost:5001/')
   const data= await post.data
   setPost(data)
   console.log(data);
  },[])
    

  


   const data=useMemo(()=>post,[post])
   const columns=useMemo(()=>COLUMNS,[])



const {getTableProps,getTableBodyProps,previousPage,nextPage ,headerGroups,page,prepareRow} =useTable({
  data,
  columns
}, useSortBy,usePagination)




  return (
    <React.Fragment>
    <div className='w-75 mt-2 center'> 
   
      <div className="row" >
        {data.length<1?<Loader type="spinner-cub" bgColor={"#483D8B"} title={"Loading...."} color={'#asdasdasd'} size={100} />:
          <table {...getTableProps()}>
          <thead>
            {
              headerGroups.map((headerGroups)=>
              <tr {...headerGroups.
              getHeaderGroupProps()}>
                {
                  headerGroups.headers.map(column=>(
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                    <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' sort-dsc'
                        : ' sort-asc'
                      : ''}
                  </span>
                    </th>
                  ))
                }
            </tr>
              )}
  
          </thead>
  
  
          <tbody {...getTableBodyProps()}>
            {
              page.map((row)=>{
                prepareRow(row)
                return(
                  <tr {...row.getRowProps()}>
                    {
                      row.cells.map((cell)=>{
                        return <td {...cell.getCellProps()}><Link to={"/detail/"+row.original._id} style={{textDecoration:'none',color:'black'}}>{cell.render('Cell')}</Link></td>
                      })
                    }
                  </tr>
                )
              })
            }
  
  
            
          </tbody>
  

        </table>
        
        
        }
{/*         
        <div className='mt-2 p-2'>
                    <button onClick={()=>previousPage()}>previus</button>
          <button onClick={()=>nextPage()}>next</button>
        </div> */}

       
    </div>
  </div>
  </React.Fragment>

  )
}