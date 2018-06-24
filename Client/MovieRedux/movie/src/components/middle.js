import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class Middle extends Component {

  constructor(props) {
      super(props);
    
      this.state = {
        dataList:[{
          name:"Avatar",
          id:1
        },
        {
            name:"3 idiot",
            id:2
        }],
        dataListShow:[{
          name:"Avatar",
          id:1
        },
        {
            name:"3 idiot",
            id:2
        }],
        showList:false,
        value:'',
        data:[]
      }
   }

   onFocus() {
  this.setState({
       showList:true
     })
  }

  onBlur() {
     this.setState({
       showList:true
     })
  }

  

 handleChange(event) {

  this.setState({
      value:event.target.value
     })
     if(event.target.value!="" && event.target.value!=undefined)
          {
              axios.post('http://localhost:8081/search',{data:event.target.value})
              .then(response =>{

              if(response.data.length>0)
                    {
                
                      this.setState({
                        dataListShow:response.data
                    })
                  }
                })
              .catch(error =>{
              console.log(error);
              })
          }
    else{
      this.setState({
          dataListShow:this.state.dataList
        })
    }
  }

  render() {
    return (
      <div className="container-fluid padding">
        <div className="main">
        <div className="jumbotron">
          <h1 className="main_h1">WE PRESENT YOU MOVIE</h1>
          <p className="main_p">a better way to search movie!!!</p>
          <br/>
          <div className="form-group row"> 

           <div className="col-xs-2">
          </div> 

             <div className="col-xs-8">
           <form action="/">                                                                                                              
                <div className="input-group search_mid">
                  <input type="text" autoComplete="off" className="form-control input-lg" placeholder="Search"  value={this.state.value} onChange={this.handleChange.bind(this)} onFocus={ this.onFocus.bind(this) }  onBlur ={ this.onBlur.bind(this)} name="search"/>
                  <div className="input-group-btn">
                    <button className="btn btn-default search_btn" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </div>
                </div>
              </form>
              {this.state.showList && <div className="showList">
              <ul>
              {this.state.dataListShow.map((data,id) =>
								{
									return(
									<Link to={'/moviedetails?'+data.id}><li key={id}>	{data.name}</li></Link>
									)})}
              </ul>
              </div> 
              }
              </div>  
              </div>
          
        </div>   
      </div>
      </div>
    );
  }
}

export default Middle;