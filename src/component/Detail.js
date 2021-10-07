import { FaTrashAlt,FaEdit } from 'react-icons/fa';
import React,{useEffect,useState,useRef} from 'react'
import {useParams,useHistory} from "react-router-dom"
import Loader from "react-js-loader";
import { useForm } from 'react-hook-form';
import axios from 'axios'


export const Detail = () => {
  const [post,setPost]=useState([])
  const histroy=useHistory()
  const [update,setupdate]=useState(false)






  const {id}=useParams()
  const post_id=useRef()






  
 const {register,handleSubmit,formState: { errors }} = useForm();







const Submit=(data,e)=>{

  console.log(data);
  // console.log(post_id.current.value);
  axios({
    method:'PUT',
    url:`http://localhost:5001/${post_id.current.value}`,
    data:data,
  }).then((res)=>{
    console.log(res);
    e.target.reset()
    setupdate(false)
    setPost(res.data)
  }).catch((err)=>{
    console.log(err);
  })
  }




 useEffect(async() => {
   const getpost=await axios.get(`http://localhost:5001/${id}`)
   const post=await getpost.data
   setPost(post)
   console.log(post);
  }, [])



const updatestete=()=>{

  
  setupdate(update=>!update)
  // setupdate(!update)

}



const delete_post=(id)=>{
  axios({
    method:'DELETE',
    url:`http://localhost:5001/${id}`
  }).then((res)=>{
    console.log(res);
    setupdate(false)
    histroy.replace('/Data')
  }).catch((err)=>{
    console.log(err);
  })
}




  return (
    <div className='text-center mt-5'>

      <div className='container mt-5 row'>

        <div className="card offset-2 w-50" style={{marginTop:'20vh'}}>
     
         
        
        
        {
          post.length===0?<Loader type="spinner-cub" bgColor={"#483D8B"} title={"loading"} color={'#FFFFFsds'} size={100} />:
          <div>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <div className="d-flex offset-10 p-1">{
          !update?
          <FaTrashAlt color="red" size="20" className="mx-2" style={{cursor:'pointer'}} onClick={()=>{delete_post(post._id)}}/>
                :null
          }
          <FaEdit size="20" color="green" className="mx-3" onClick={()=>{updatestete(!update)}} style={{cursor:'pointer'}}/>
            </div>
            {
            update? <form onSubmit={handleSubmit(Submit)} className="form-group w-75 rounded offset-1 shadow p-3 mb-5 mt-5 " >
            <input type="text" value={post._id} ref={post_id} hidden/>
            <label style={{fontWeight:'bold'}} >Title</label>
            <br/><input {...register('title')} defaultValue={post.title} className="form-control"/><br/>
            <label style={{fontWeight:'bold'}} >Body</label>
            <br/>
            <input {...register('body')} defaultValue={post.body} className="form-control"/>
            <input type="submit" value="Update"  className="btn btn-primary mt-4"/>
          </form>:null
          }
          </div>
        }
          
        </div>
      </div>
    </div>
  )
}
