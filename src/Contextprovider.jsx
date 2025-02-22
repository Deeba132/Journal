import React, { createContext, useContext, useEffect, useState } from 'react'
const context=createContext()
function Contextprovider({children}) {
    const [font, setFont] = useState('Arial');
    const [bg, setBg] = useState('#000000');
    const [textSy, setText] = useState("");
    const[title,setTitle]=useState("")
    const[size,setSize]=useState(10)
    const[submit,setsubmit]=useState(false)
    const[items,setItems]=useState([])
  
    let request = indexedDB.open("text", 1);
  
    request.onupgradeneeded = function(event) {
      let db = event.target.result;
      if (!db.objectStoreNames.contains('journal')) {
        db.createObjectStore('journal', { keyPath: "id", autoIncrement: true });
      }
    };
  
    request.onsuccess = function(event) {
      let db = event.target.result;
      db.onversionchange = () => {
        db.close();
        alert("A new version of this page is ready. Please reload or close this tab!");
      };
    };
  
    const addTextToDB = (event) => {
      event.preventDefault();
      let request = indexedDB.open("text", 1);
  
      request.onsuccess = function(event) {
        let db = event.target.result;
        let transaction = db.transaction("journal", "readwrite");
        let objectStore = transaction.objectStore("journal");
        let text = {
          title:title,
          topic: textSy,
          font:font,
          bg:bg,
          size:size,
          
        };
        let requestSy = objectStore.add(text);
        requestSy.onsuccess = function() {
          console.log(requestSy.result);
          setItems((previtems)=>[...previtems,text]);
        };
        requestSy.onerror = function() {
          console.log(requestSy.error);
        };
      };
      setText("")
      setTitle("")
      setsubmit(true)
    };
  // Open the database
 useEffect(function(){
    let request = indexedDB.open('text', 1);

    request.onsuccess = function(event) {
        let db = event.target.result;
    
        // Create a transaction
        let transaction = db.transaction('journal', 'readonly');
    
        // Get the object store
        let objectStore = transaction.objectStore('journal');
    
        // Get all items from the store
        let getAllRequest = objectStore.getAll();
    
        getAllRequest.onsuccess = function() {
            setItems(getAllRequest.result);
            console.log(items);
        };
    
        getAllRequest.onerror = function() {
            console.error('Error fetching items from IndexedDB:', getAllRequest.error);
        };
    };
    
    request.onerror = function(event) {
        console.error('Error opening IndexedDB:', event.target.error);
    };
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[])
  
  return(
    <context.Provider 
     value={
        {items,
         bg,
         font,
         size,
         submit,
         setsubmit,
         addTextToDB,
         setBg,
         setFont,
         setSize,
         title,
         setTitle,
         textSy,
         setText
        }
     }
    >
        {children}
    </context.Provider>
  )
  
}
function useCon(){
    const usecon=useContext(context)
    return usecon;
}
export{Contextprovider,useCon};
