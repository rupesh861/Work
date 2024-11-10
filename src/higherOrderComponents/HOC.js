import React, { useEffect, useState } from 'react'


function HOC(WrappedComponent,url){
    return function HOC(props){
        const [data,setData] = useState([]);
        const [loading,setLoading] = useState(true);
        const [error,setError] = useState(null);

        const fetchData  = async()=>{
            try {
                const response = await fetch(url);
                // console.log(response);
                const result = await response.json();
                // console.log("jhvjjhgvg",result);
                setData(result);
            } catch (error) {
                console.log(error);
            }finally{
                setLoading(false)
            }
        }

        useEffect(  ()=>{
            fetchData();
        },[url]);

        return (
          <div>
            <WrappedComponent data={data} loading={loading} error={error} {...props}/>
          </div>
        )        
    }
}

export default HOC;