import React, { useState } from "react";
import history from "./utils/history";

//import {useState} from 'react';
import web3 from './web3';

import { Router, Route, Switch } from "react-router-dom";

import Nft from "./Nft";
import Sendpage from "./Sendpage";
import Newpage from "./Newpage";
import Tokencreate from "./Tokencreate";
import Printallimage from "./Printallimage";
import getaaa from "./cabi";


function Saleimagepage() {
 

  

      const onSubmitNFT = async (event) => {
      alert("waiting for pic url");
      event.preventDefault();    
        var names =[];
        var ima =[];
        var p =[];
    alert("geta"+getaaa);
   
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    alert(accounts[0])
    
    var items = await getaaa.methods.totalSupply().call();
      alert(items)
      for(var i=0;i<items;i++){
        var v = await getaaa.methods.tokenByIndex(i).call();
        alert("id" + v)
        var s = await getaaa.methods.items(v).call();
        var state = s.state;
        if(state == 1){
          names.push(v)
          alert("For Sale" + v)
          p.push(s.price)
        }
        
      }
   
    for(var i=0;i<names.length;i++){
      

      ima.push(await getaaa.methods.tokenURI(names[i]).call());
      alert(names[i])
      var a=document.createElement("img");
      var  b=document.createElement("button")
      var t = document.createElement("textarea")

      var  c=document.createElement("li")

      var  d=document.createElement("li")

      var  ebr=document.createElement("br")

      b.innerHTML="Buy Token";
    

      a.src=ima[i]
      a.id=ima[i]
      a.tid = names[i]
      a.width=400
      a.height=400
      t.innerText= "Price" +p[i]
      
      b.src=ima[i]
      b.id=ima[i]
      b.tid = names[i]
      c.style.listStyleType="none"
      c.append(a)
      c.append(t)
      c.append(ebr)
      c.append(b)
      alert("wait for displaying images")
      document.getElementById("prag").append(c)

      document.getElementById("prag").append(ebr)


      document.getElementById("prag").append(d)

      document.getElementById("ram").append(c)
      b.onclick = async(event) =>{
        var thing = event.target.tid;
        await getaaa.methods.buyThing(thing).send({from:accounts[0]});
       alert("Token Purchased Id" + thing)
        
      }

    }


   
    
   
}


  

  return (    

    <div className="App">


<h1>Sales images</h1>



<button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/nft");
                }}>
                Go Deploy Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/sendpage");
                }}
              >
                Go Transfer page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/tokencreate");
                }}>
                Tokencreate Page 
              </button>
              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/newpage");
                }}
              >
                Get Single Image Page
              </button>

              <button
                class="btn btn-info btn-block"
                type="button"
                onClick={() => {
                  history.push("/Printallimage");
                }}
              >
                Print all Image Page
              </button>





              <br></br>
<br></br>


      
<center>
<br></br>


		<form onSubmit={onSubmitNFT} id="create-course-form" >


<button 
             type="submit"> 
             Press Button To Get sales images
             </button>

</form>





      
<br></br>
<br></br>


</center>

<br></br>
<br></br>



                    
                    

            <Router history={history}>
          <Switch>
            <Route path="/" exact>
              <div class="display-4 mb-1">Choose a route to go to</div>
              
            </Route>
            <Route path="/nft">
              <Nft />
            </Route>
            <Route path="/sendpage">
              <Sendpage />
            </Route>
            <Route path="/tokencreate">
              <Tokencreate />
            </Route>
            <Route path="/newpage">
              <Newpage />
            </Route>
            <Route path="/printallimage">
              <Printallimage />
            </Route>
          </Switch>
        </Router>

        
        <div>
            
        </div>








    


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Saleimagepage;
