import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Fragment, useEffect, useRef, useState } from 'react';
import { Button } from '@mui/material';
import { isNull } from 'util';


export default function UploadButtons() {

const[imageSelect,setImageSelect] = useState<any>("")

useEffect(() => {
    console.log(imageSelect);
    let img:any = document.createElement("img");
    img.src = imageSelect;
    document.body.appendChild(img);
}, [imageSelect])

    const fileBrowseHandler = (event:any) => {
          let value = URL.createObjectURL(event.target.files[0]);
          console.log(value);
        setImageSelect(value);
        
    }

    return (
      <form >
        <Button
    variant="contained"
    component="label"
    >
    Upload File
    <input
      type="file"
      hidden
      onChange = {(e)=>fileBrowseHandler(e)}

    />
  </Button>
</form>
    )
}