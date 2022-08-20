import React from 'react';

import {Image,Text,Flex,Spacer,Center, Heading,Box, HStack, Circle, VStack } from '@chakra-ui/react'
import {IoIosArrowForward} from 'react-icons/io';
import { Link } from "react-router-dom";

function ResultThum({img,date,ratio,num}) {
    return (
      <Box m={4} p={1} shadow='md' borderWidth='1px' borderRadius={8} >
        <Flex align='center' justifyContent= "space-between" alignItems = 'center' m={4}>
            <Box>
              <Image  
              w ='40%'
              src={img}
              alt='Company'
              />
              <VStack w='50%'>
                <Text>
                {date}
                </Text>
                <Text>
                예측 과실비율 {ratio}
                </Text>
                <Text>
                {num}명의 유저 참여
                </Text>
              </VStack>
            </Box>
          <div>
            <Link to = "/user/resultList">
                <IoIosArrowForward />
            </Link>
          </div>
          
        </Flex>
      </Box>  
    )
  }
function ResultList(){
    return(
        <div>
            <Heading m={4}>
                총 3건의<br/>
                김열정님의 분석 결과 입니다!
            </Heading>
        <Box m={4} p={1} shadow='md' borderWidth='1px' borderRadius={8} >
        <ResultThum img={'acc.png'} data = "2022년 7월 12일" ratio ="7:3" num = '5'/>
        <ResultThum img={'acc.png'} data = "2022년 6월 2일" ratio ="4:6" num = '3'/>
        <ResultThum img={'acc.png'} data = "2022년 5월 21일" ratio ="8:2" num = '4'/>
        </Box>
        </div>
    );

}
export default ResultThum;
