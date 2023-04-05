import { useState, useEffect } from 'react';




function Movielist () {
    const [name,setName] = useState(['']);


  

    const names = async () => {
        const response = await fetch('http://www.omdbapi.com/?s=her&apikey=32e96066');
        const data = await response.json();
        
        console.log(data);
        setName(data.Search);
          
            
    }

        useEffect(() => {
        names ()
    }, [])


        
    return (
        <div className='container-fluid movie-app'>
        <div className='row'>
        {name.map((movie, index) => <div key={movie[index]}>{movie.Title}</div>)}
       
        </div>
    </div>
    );
}

export default Movielist;