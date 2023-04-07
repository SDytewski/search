import { useState, useEffect } from 'react';




function Movielist () {
    const [name,setName] = useState(['']);
    const [searchTerm, setSearchTerm] = useState('');
  
 

    const names = async (title) => {
        const response = await fetch('http://www.omdbapi.com/?s='+title +'&apikey=32e96066');
        const data = await response.json();

        // const response = await fetch('http://www.omdbapi.com/?s=her&apikey=32e96066');
        
        console.log(data);
        setName(data.Search);
        
         
            
    }

        useEffect(() => {
        names ('her')
    }, [])


        
    return (
        <div className='container-fluid movie-app'>
           <div className='search'>
                <input 
                    placeholder='Search for moves'
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <button
                   
                    alt='search'
                    onClick={()=> names(searchTerm)}>
                        Search
                    </button> 
            </div>
        <div className='row'>
        {name.map((movie, index) => <div key={index}>{movie.Title}</div>)}
       
        </div>
    </div>
    );
}

export default Movielist;