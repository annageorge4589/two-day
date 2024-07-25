import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
  const [counter,setCounter]=useState(0);
  const [form,setForm]=useState({
    "sname":'',
    "adm":'',
    "Dept":'',
    "Sem":''
   })
  let showData=()=>{
    console.log(form);
  }
//  let valueAdd=()=>{
//     setCounter(counter+1);
//   }

  function valueCap(e){
   // console.log(e)
    setForm({...form,[e.target.name]:e.target.value})
  }
  return (
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >
    <div>
      <TextField
        
        id="outlined-required"
        label="Required"
        textColor="primary"
        defaultValue="name"
        name='sname'
        value={form.sname}
        onChange={valueCap}


      />
      <br/>
      <TextField
        
        id="outlined-required"
        label="Required"
        defaultValue="adm"
        name='adm'
        value={form.adm}
        onChange={valueCap}

      />
      <br/>
      <TextField
        
        id="outlined-required"
        label="Required"
        defaultValue="Dept"
        name='Dept'
        value={form.Dept}
        onChange={valueCap}
        />

      

      <br/>
      <TextField
     
        id="outlined-required"
        label="Required"
        defaultValue="sem"
        name='Sem'
        value={form.Sem}
        onChange={valueCap}

      /><br/>
       </div>
       <Button variant="contained" color="success" onClick={showData}>Submit</Button><br/>
       {/* <small>button is clicked {counter} times</small> */}
    </Box>
  );
}

export default Add