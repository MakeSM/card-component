import React from 'react';
import { Box } from './components/BoxCard.styled';
import { ImageCard } from './components/ImageCard.styled';
import { HeadlineCard } from './components/HeadlineCard.styled';
import { themeStyle } from './styles/Theme.styled';
import { TextCard } from './components/TextCard.styled';
import { BtnCard } from './components/BtnCard.Styled';
import { BoxBtn } from './components/BoxBtn.styled';
import rectangleImage from './styles/images/Rectangle.png';

function App() {
   return (
      <div className="App">
         <Box>
            <ImageCard src={rectangleImage} alt='image desert'/>
            <HeadlineCard color={themeStyle.colors.textDecoration.h1}>
               Headline
            </HeadlineCard>
            <TextCard color={themeStyle.colors.textDecoration.text}>
               Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit
               molestie ornare in venen.
            </TextCard>
            <BoxBtn>
               <BtnCard btnType="btnSee">See more</BtnCard>
               <BtnCard btnType="btnSave">Save</BtnCard>
            </BoxBtn>
         </Box>
      </div>
   );
}

export default App;
