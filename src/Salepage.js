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


function Salepage() {
  const[tokenstate,settokenstate] = useState("");


  //const [toaddress] = useState("");
  //const [tid,setId] = useState("");
  //const [turi,setUri] = useState("");
  //const [tname,setName] = useState("");
  //const [tsymbol,setSymbol] = useState("");
  //const [tokenuri,setTokenUri] = useState("");
  //var [getimageurl,setgetImage] = useState("");
  //const [tfile,setTfile] = useState("");
  //const [ipfsHash,setIpfsHash] = useState(null);
  //var [buffer,setBuffer] = useState("");
  //const [ethAddress,setEthAddress] = useState("");
  //const [blockNumber,setBlocknumber] = useState("");
  //const [transactionHash,setTransaction] = useState("");
  //const [gasUsed,setGasUsed] = useState("");
  //const [txReceipt,se] = useState("");

  //const [dataset,setdatas] = useState("");

  //const [address,setaddress] = useState("");
  //const [geta,setgeta] = useState("");

  //var [printgeta,setgetaprint] =useState("");
  //var [printgeta2,setgetaprint2] =useState("");

  //var [printgeta3,setgetaprint3] =useState("");
  //var [printgeta4,setgetaprint4] =useState("");

  //var [selectedImages,setSelectedImages] = useState([]);


  //const [imgurl,setimgurl] = useState([]);


  

  
  //var [p,setp] =useState("");

  var names = [];
  var afternames=[];

  var salesave = [];
  const pp =[];

  var k=useState("");
  //const namesc = [];

  //const edho = (source) =>{
    //  return  selectedImages.map((photo) => {
      //    return <img src={photo} key={photo}/>

      //})
    //};
        
      
  
    
      //new write below

      //const componentDidMount = () =>(event){
        
        // your source code to load initial data

        
   // }


      const onSubmitNFT = async (event) => {
    
    
      alert("waiting for pic url");
    
      //var ta=tname;
      //var tb=tsymbol;
      //var tc='https://ipfs.io/ipfs/'+ipfsHash;
      //var td=toaddress;
      //var te=tid;
      //var tf='https://ipfs.io/ipfs/'+ipfsHash;
      
      
    
      //alert("im work ta tb tc  td te tf  "+ta+" "+tb+" "+tc+" "+td+" "+te+" "+tf);
    
      event.preventDefault();
    
      //const accounts = await  web3.eth.getAccounts();
    
    
        
    alert("completed");    
    
    
    alert("check"+localStorage.getItem('myData'));


    //var poda=localStorage.getItem('myData');

   



    //add con add below

    //setaddress(localStorage.getItem('myData'));
    
  


   // alert("after abi"+poda);
    
  //  var getaaa=new web3.eth.Contract(abi,poda);
    
    alert("geta"+getaaa);
   
    event.preventDefault();
    
    const accounts = await web3.eth.getAccounts();

    alert(accounts[0])


        //await geta.methods.tokenURI(te).send({
    //from: accounts[0]
    //value: this.setState({c:accounts[0]})
    
    //});



      var printgeta=await getaaa.methods.tokensOfOwner(accounts[0]).call();


      //var get=printgeta.split(",")[0];

      for(var i=0;i<printgeta.length;i++){

        names.push(printgeta[i]);

      }

      //alert("split owner address  "+printgeta.length)

      alert("owner address"+printgeta)


      

      for(i=0;i<printgeta.length;i++){

        //var nameget=names[i];


        afternames.push(await getaaa.methods.tokenURI(names[i]).call());

        event.preventDefault();

        //alert("alert kulla "+afternames.push(await getaaa.methods.tokenURI(names[i]).call()))

        alert(names[i])

      }


      for(i=0;i<afternames.length;i++){

        alert("urllll      "+afternames[i])
      }


      //var j=0;

      //var b;

//      for(k=0;k<afternames.length;k++){

        //var a=document.createElement("img")

        //b=document.createElement("button")

        //a.id=afternames[k]

        
        //alert(b.id)

        //b.widt=500
        //b.height=500

        //a.src=afternames[k]
        //a.width=400
        //a.height=400

        //document.getElementById("prag").append(a)

        //document.getElementById("ram").append(b)


        //b.onclick = () =>{

        
          //alert(this.event.id)
        //}

        //a.onclick = () =>{
            //alert("image click"+afternames[j])
            //alert(afternames[j])


        //}
      
        //b.onclick = () => {

          //  alert("onclick work"+afternames[j]);
//            salesave.push()


        //}
      //setgetaprint(names[i]);

      //alert(names[i]);
      //alert(selectedImages[i]);

    //}  


   //var tokenstate=settokenstate(await getaaa.methods.setTokenState([isd],"true").send({from:accounts[0]}));

    
   
}

function hello(event){

  alert(afternames.length)

  for(var i=0 ;i<afternames.length;i++)
  {

     

      var a=document.createElement("img")
      
      var  b=document.createElement("button")

      var  c=document.createElement("li")

      var  d=document.createElement("li")

      var  ebr=document.createElement("br")



        //a.id=afternames[k]

        
        //alert(b.id)

        //b.widt=500
        //b.height=500
        //b.setAttribute("value",)


        b.innerHTML="Enable Sale";
    

        a.src=afternames[i]
        a.id=afternames[i]
        a.tid = names[i]
        a.width=400
        a.height=400
        
        b.src=afternames[i]
        b.id=afternames[i]
        b.tid = names[i]
        c.style.listStyleType="none"
        c.append(a)
        c.append(ebr)
        c.append(b)
        
               

        document.getElementById("prag").append(c)

        document.getElementById("prag").append(ebr)


        document.getElementById("prag").append(d)

        document.getElementById("ram").append(c)


        a.onclick = (event) =>{

        
          hello1(event.target.id)

          alert(event.target.id)
        // pp.push(afternames.pop(event.target.tid))
           
          
        }
        
        b.onclick = async(event) =>{
          var isd = event.target.tid;
		  alert(event.target.tid)
		  const accounts = await  web3.eth.getAccounts();
         await getaaa.methods.setTokenState([isd],"true").send({from:accounts[0]});
         // salepage.settokenstate();
		  alert("checking")
		  var price = window.prompt("enter the price for your token");
		  await getaaa.methods.setTokenPrice([isd],price).send({from:accounts[0]})
		const priceamount = await getaaa.methods.items(isd).call();
		  alert(priceamount.price)
         
          
        }

        
    //alert(afternames[i])



  }


  function hello1(getvalue){

    alert(getvalue)

  }

  //var a=document.createElement("img")

  //var b=document.createElement("button")




  //b.widt=500
    //    b.height=500

      //  a.src=afternames[i]
//        a.width=400
  //      a.height=400

    ///    document.getElementById("prag").append(a)

       // document.getElementById("ram").append(b)



  //const id=event.target.id;
  //alert(id)

//}
}
  

  return (    

    <div className="App">


<h1>Print Your NFT Image</h1>



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
             Press Button To Get Your NFT Image Print
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






<button id="ramm" onClick={hello}>click button</button>


    


<ul id="prag">


</ul>

<ul id="ram" >
  
</ul>

    
	  
      </div>      
  );
}

export default Salepage;
