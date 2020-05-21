import React, {useState, useEffect} from 'react';

function test({match}){
  let params = match.params;

  console.log(params.id)

    
        return (
            <div>
               <h1>hey {params.id}</h1>
            </div>
        );
    
}

export default test;