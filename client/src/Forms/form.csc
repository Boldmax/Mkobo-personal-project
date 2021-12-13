:root{
    --primary-white:#ffffff;
    --primary-blue: #0248CD;
    --primary-ligtGrey: #a9b1c0;
    --primary-darkGrey: #676e7d;
    --primary-darkBlue: #233862;
  }
  
  .App {
    background-color: #e7ebf3;
    font-family: 'Poppins', sans-serif;
    overflow: hidden;
  }


/******************************* LOG IN FORM ****************************************/
.signIn-container{
    position: relative;
    display: block;
    height: 100vh;
    width: 100vw;
    background-color: #e7e3e3;
    
    }
    
    #sub-container{
      display: flex;
      flex-direction: row;
      margin: 0;
      padding: 0;
      height: 70vh;
      width: 65vw;
      background-color: #ffffff;
      /* margin: auto; */
      align-items: center; 
      justify-content: center; 
    }
    
    .form-body1 h2{
      padding-top: 4rem;
      display: flex;
      color: #0248CD;
      width: 8rem;
      margin: auto;
      margin-left: 286px;
      font-size: 40px;
      font-weight: bold;
      letter-spacing: -0.015em;
    }
    
    .signIn-illustration1{
      position: relative;
      width: 50vw;
      height: max-content;
      background: linear-gradient(180deg, #0248CD -7.44%, #A7C1F3 -7.43%, #FFFFFF 123.17%);
     }  
  
    .signIn-illustration1 img{
      display: block;
      width: 80%;
      height: 80%;
      margin: auto;
      }
  
      .signIn-illustration1 img:first-child{
        display: block;
        width: 7rem;
        height: 2.6rem;
        margin-top: 2rem;
        margin-left: 1.5rem;
        z-index: 99;
        }
    
    .form-body1{
      position: relative;
      width: 50vw;
      height: 100vh;
    }
    
    .form{
      margin-top: 72px;
      display: block;
      position: relative;
      height: 55vh;
    }
    
    .fContent{
      padding-top: 1.5rem;
      display: grid;
      width: 37rem;
      justify-content: center;
    }
    
    #signInLabel{
      display: flex;
      font-size: 14px;
      font-weight: bold;
      color: #233862;
      justify-content: flex-start;
      margin-left: 155px;
    }
    
    .fContent input{
     display: block;
     width: 419px;
     height: 46px;
     border: 1px solid #5D81A2 30%;
     border-radius: 5px;
     margin-left: 155px;
     margin-top: 10px;
    }

    .fContent span{
    color: red;
    font-Size: 0.8rem;
    margin-Left: 155px;
    padding: 0 ;
    }
    
    .form button{
      display: block;
      font-Size: 1rem;
      background-Color: #A9B1C0;
      color: #676E7D;
      Width: 419px;
      Height: 42px;
      margin-left: 165px;
      margin-top: 1.6rem;
    }
    
    .form button:hover{
    background-color: #0248CD;
    color: #ffffff;
    }
    
    .form-body1 p, a{
      margin-top: 14px;
      font-size: 13px;
      font-weight: 600;
      color: #233862;
      line-height: 19px;
      margin-left: 165px;
    }
    
    .form a{
      font-weight: 600;
      margin-left: 165px;
    }
    
    .form a:last-child{
      margin-left: 0rem;
      color: #000000;
    }
    
    /******************************* SIGN-UP FORM ****************************************/
    
    .signUp-container{
      position: relative;
      display: block;
      height: 100vh;
      width: 100vw;
      background-color: var(--primary-white);
      }
    
      .form-body2 h2{
        display: flex;
        color: #0248CD;
        width: 21rem;
        margin: auto;
        margin-top: 2rem;
        margin-left: 198px;
        font-size: 40px;
        font-weight: 700;
      }
      
       .form-body2 .BVN{
        position: relative;
        display: block;
        margin-top: 2rem;
        margin-bottom: -3.5rem;
        margin-left: 165px;
        width: 26rem;
        font-size: 12px;
        font-weight: 400;
        color: #AAC6CE;
      }
      
      .form-body2 p, a{
        margin-left: 165px;
        margin-top: 1rem;
        font-size: 0.8rem;
        color: #707070;
        font-weight: 600;
      }

      .signIn-illustration2{
        position: relative;
        width: 50vw;
        height: 100vh;
        background: linear-gradient(180deg, #0248CD -7.44%, #A7C1F3 -7.43%, #FFFFFF 123.17%);
       }
       
       .signIn-illustration2 img{
       display: block;
       width: 90%;
       height: 55%;
       margin: 10rem auto 0 auto;
       }
       
       .signIn-illustration2 img:first-child{
         display: block;
         width: 7rem;
         height: 2.5rem;
         margin-top: 2rem;
         margin-left: 1.5rem;
         }

        #label{
          display: flex;
          font-size: 14px;
          margin-left: 160px;
        }
    

  @media screen and (max-width:1024px) {

  .signIn-illustration1{
    position: relative;
    width: 50vw;
    height: 100vh;
    background: linear-gradient(180deg, #0248CD -7.44%, #A7C1F3 -7.43%, #FFFFFF 123.17%);
 } 

  .form-body1{
    position: relative;
    width: 50vw;
    height: 100vh;
  }

  .signIn-illustration1 img{
    display: block;
    width: 80%;
    margin: auto;
    }

    #signInLabel{
      display: flex;
      font-size: 14px;
      margin-left: -60px;
    }

    .fContent input{
      width: 349px;
      height: 56px;
      margin-left: -60px;
      margin-top: 15px;
     }

     .form button{
      font-Size: 14px;
      Width: 349px;
      Height: 48px;
      margin-left: 95px;
      margin-top: 1.6rem;
    }

    #span{
      display: block;
     position: absolute;
     color: red;
     margin-top: 95px;
     font-Size: 0.7rem;
     margin-Left: 92px;
    }

      .form-body1 p, a{
        margin-top: 14px;
        font-size: 13px;
        font-weight: 600;
        color: #233862;
        line-height: 19px;
        margin-left: 95px;
      }
      
      .form a{
        font-weight: 600;
        margin-left: 95px;
      }
      
      .form a:last-child{
        margin-left: 0rem;
        color: #000000;
      }

      .form-body1 h2{
       font-size: 36px;
       margin-left: 210px;
      }

      .form{
        margin-top: 52px;
        height: 55vh;
      }

   /******************************* SIGN-UP FORM ****************************************/
   .form-body2 h2{
    width: 21rem;
    margin-top: 2rem;
    margin-left: 98px;
    font-size: 36px;
    font-weight: 700;
  }

  #form{
    width: 349px;
    height: 46px;
    margin-left: -50px;
    margin-top: 5px;
  }

  #label{
    display: flex;
    font-size: 14px;
    margin-left: -50px;
  }

  .fContent span{
    display: block;
    position: absolute;
    color: red;
    font-Size: 0.7rem;
    margin-Left: 100px;
    margin-top: 80px;
    }

    .signIn-illustration2 img{
      display: block;
      width: 90%;
      height: 45%;
      margin: 14rem auto 0 auto;
      }

  .signIn-illustration2{
    width: 50%;
  }

  .form-body2{
    width: 50%;
  }

  .form-body2 .BVN{
   margin-left: 95px;
  }
}

@media screen and (max-width:768px){

/******************************* LOG IN FORM ****************************************/
.fContent input{
  width: 280px;
  height: 36px;
  margin-left: -200px;
  margin-top: 15px;
 }

 .form button{
  font-Size: 14px;
  width: 280px;
  height: 36px;
  margin-left: 57px;
  margin-top: 1.6rem;
}

.form-body1 h2{
  font-size: 28px;
  margin-left: 140px;
 }

 .form{
   margin-top: 37px;
   height: 55vh;
 }

#span{
 display: block;
 position: absolute;
 color: red;
 margin-top: 75px;
 font-Size: 0.7rem;
 margin-Left: 60px;
}

.form-body1 p, a{
  margin-top: 14px;
  font-size: 10px;
  font-weight: 600;
  color: #233862;
  line-height: 19px;
  margin-left: 60px;
}
  
  .form a{
    font-weight: 600;
    margin-left: 60px;
  }
  
  .form a:last-child{
    margin-left: 0rem;
    color: #000000;
  }
  #signInLabel{
    display: flex;
    font-size: 11px;
    margin-left: -200px;
  }

 /******************************* SIGN-UP FORM ****************************************/

 .signIn-illustration2{
  position: relative;
  width: 50vw;
  height: 100vh;
  background: linear-gradient(180deg, #0248CD -7.44%, #A7C1F3 -7.43%, #FFFFFF 123.17%);
 }
 
 .signIn-illustration2 img{
 display: block;
 width: 95%;
 height: 50%;
 margin: 10rem auto 0 auto;
 }
 
 .signIn-illustration2 img:first-child{
   display: block;
   width: 7rem;
   height: 2.5rem;
   margin-top: 2rem;
   margin-left: 1.5rem;
 }

 .form-body2{
  width: 50vw;
 }

 .form-body2 h2{
  width: 21rem;
  margin-top: 2rem;
  margin-left: 90px;
  font-size: 25px;
  font-weight: 700;
}

#form{
  width: 230px;
  height: 36px;
  margin-left: -180px;
  margin-top: 8px;
  
}

#label{
  position: absolute;
  display: flex;
  font-size: 10px;
  margin-left: 91px;
  margin-top: -10px;
}

.fContent span{
  display: block;
  position: absolute;
  color: red;
  font-Size: 8px;
  margin-Left: 92px;
  margin-top: 50px;
  }

.form-body2 .BVN{
  position: absolute;
 margin-left: 90px;
 font-size: 8px;
 margin-top: 16px;
}

.form-body2 p, a{
  margin-left: 90px;
  margin-top: 0.8rem;
  font-size: 10px;
  color: #707070;
  font-weight: 600;
}

.form button{
  font-Size: 14px;
  Width: 230px;
  Height: 36px;
  margin-left: 90px;
  margin-top: 1.6rem;
}

}

@media screen and (max-width:425px){
  /******************************* LOG IN FORM ************************************/

  .signIn-illustration1{
    width: 100%;
    filter: blur(4px);
  }

  .form-body1{
    display: block;
    width: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }

  .fContent input{
    background: rgba(0, 0, 0, 0.2);
   }

   .form-body1 p, a{
    color: #ffffff;
  }
    
    .form a{
      color: #ffffff;
    }
    
    .form a:last-child{
      margin-left: 0rem;
      color: #ffffff;
    }
   .fContent label{
      color: #ffffff;
    }

    .form button{
      font-Size: 14px;
      Width: 275px;
      Height: 36px;
      margin-left: 58px;
      margin-top: 1.6rem;
    }

  /******************************* SIGN-UP FORM ****************************************/
  .signIn-illustration2{
    width: 100vw;   
    filter: blur(3px);
   }

   .signIn-illustration2 img{
    margin: 8rem auto 0 auto;
    }

   .form-body2{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
  }

  #button{
    font-Size: 14px;
    Width: 230px;
    Height: 36px;
    margin-left: 92px;
    margin-top: 1.6rem;
  }

  .form-body2 .BVN{
    color: gold;
   }
}

@media screen and (max-width:375px){

  #form{
    margin-left: -210px;
   }

   #button{
    margin-left: 78px;
  }

  .form-body2 .BVN{
    color: gold;
    margin-left: 75px;
   }

   #label{
    display: flex;
    margin-left: 75px;
   }
}

@media screen and (max-width:320px){
/******************************* SIGN-UP FORM ****************************************/
.form-body1 h2{
  margin-left: 120px;
}

#signInLabel{
  margin-left: -270px;
}

.fContent input{
 margin-left: -270px;
}

.form button{
  margin-left: 24px;
}

#span{
  margin-left: 24px;
}

.form-body1 p, a{
  margin-left: 24px;
}

.form a{
  margin-left: 24px;
}


/******************************* SIGN-UP FORM ****************************************/
  #form{
    margin-left: -250px;
   }

   #button{
    margin-left: 45px;
  }

  #label{
    margin-left: 45px;
  }

  .form-body2 .BVN{
    margin-left: 45px;
   }

   .form-body2 h2{
    margin-left: 60px;
  }

  .fContent span{
    margin-left: 50px;
  }

}
