import { useState, useEffect } from 'react';




function Movielist () {
    const [name, setName] = useState([]);


    useEffect(() => {
        names ()
      }, [])
 


const names = async () => {
    const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=32e96066');
    const data = await response.json();
     setName(data)
     console.log(data);
         
        
}

return (
    <div className="App">
    
    
    </div>

    );

}

export default Movielist;