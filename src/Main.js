import { Component } from 'react';
import Data from './data.json';
import HornedBeasts from './HornedBeasts.js';

class Main extends Component{
  render() {
    return (
      <>
      <main>
        <h1> {this.props.title}</h1>
      {/* <HornedBeasts title="Narwhal" imageURL="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" description="Its a narwal"/>
      <HornedBeasts title="Ryhno" imageURL="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description="Its a family of rhyno"/> */}

      <div>
        {Data.map( beast => {
          return(
            <HornedBeasts
            imageURL={beast.image_url}
            title={beast.title}
            description={beast.description}
            />
          )
        })}
      </div>
      </main>
    
      

      </>
     )
     

     

  
  }
}

export default Main
