import React from 'react';
import { Heading, ChakraProvider, Button } from '@chakra-ui/react'
import Dropzone from 'react-dropzone';
import {AiFillFileAdd} from 'react-icons/ai';
import { Link } from "react-router-dom";
function VideoUploadPage(){
    return(
        <div style={{maxWidth:'700px',margin:'2rem auto' }}>
            <div style = {{textAlign:'center', marginBottom:'2rem'}}>
                <Link to ='./user/resultList'>
                    <Button>결과 확인하기</Button>
                </Link>
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
                <Button>분석접수하기</Button>
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