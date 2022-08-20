import React from 'react';
import { Heading, ChakraProvider } from '@chakra-ui/react'
import Dropzone from 'react-dropzone';
import {AiFillFileAdd} from 'react-icons/ai';
function VideoUploadPage(){
    return(
        <div style={{maxWidth:'700px',margin:'2rem auto' }}>
            <div style = {{textAlign:'center', marginBottom:'2rem'}}>
                <Heading as='h2'>
                    Upload Video
                </Heading>
                <Dropzone
                onDrop ={onDrop}
                multiple={false}
                maxSize>
                    {({getRootProps,getInputProps})=>
                    (
                        <div style={{width:'300px',height:'240px',border:'1px solid light gray',
                    alignItems:'center', justifyContent :'center'}}{...getRootProps()}>
                        <input{...getInputProps()} />
                        <AiFillFileAdd/>
                    </div>
                    )}</Dropzone>
            </div>
        </div>
    )
}
// const VideoForm = styled.button`

// `;
const onDrop = (files) => {
    console.log("drop 성공여부 출력");
}
export default VideoUploadPage;