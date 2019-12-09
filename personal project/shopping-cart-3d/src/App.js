import React from 'react';
import SearchBox from './components/Search_input';
import ImgCategory from './components/Img_category';

function App() {
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center' ,width:'100vw',height:'100vh'}}>
        <SearchBox/>
      </div>
      <div style={{backgroundColor:'red'}}>
        <ImgCategory/>
      </div>
    </>
  );
}

export default App;
