import React, { Component } from 'react';
import MovieBox from './moviebox';
import axios from 'axios';

class MainMovieBox extends Component {

 constructor(props) {
      super(props);
    
      this.state = {
        data:[]
      }
   }

  componentDidMount() {

      axios.get('http://localhost:8081/getAllMovies')
     .then(response =>{
     
      this.setState(
        {data: response.data}
      );
      console.log(response.data);
     })
     .catch(error =>{
     console.log(error);
     })
  }



  render() {
    return (
     <div>
     <div className="container">
        {
            this.state.data.length>0 && this.state.data.map((data,id) =>
              { 
                return(
                  <div key={id} className="col-xs-3">
                  <MovieBox name={data.name} url={data.url} genres={data.genres} id={data.id}/>
                  </div>
              );
              })
         }
    
      
	    </div>
	    </div>
    );
  }
}

export default MainMovieBox;