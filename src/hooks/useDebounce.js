import { useEffect, useRef } from 'react';
const useDebounce = (callBack, delay) =>{
   const timeOutId = useRef(null);

   useEffect(()=>{
       return () => {
           clearTimeout(timeOutId.current);
       }
   },[])

   const debounce = (...args) => {
       if(timeOutId.current){
           clearTimeout(timeOutId.current);
       }

       timeOutId.current = setTimeout(() => {
           callBack(...args);
       }, delay);
   };

   return debounce;
}

export default useDebounce;