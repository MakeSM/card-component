import React from 'react';
import { Box } from './BoxCard.styled';
import { ImageCard } from './ImageCard.styled';
import { HeadlineCard } from './HeadlineCard.styled';
import { TextCard } from './TextCard.styled';
import { BoxBtn } from './BoxBtn.styled';
import { BtnCard } from './BtnCard.Styled';
import rectangleImage from '../styles/images/Rectangle.png';
import { themeStyle } from '../styles/ThemeStyled';

export const Card = () => {
   return (
      <Box>
         <ImageCard src={rectangleImage} alt="image desert" />
         <HeadlineCard color={themeStyle.colors.textDecoration.h1}>
            Headline
         </HeadlineCard>
         <TextCard color={themeStyle.colors.textDecoration.text}>
            Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie
            ornare in venen.
         </TextCard>
         <BoxBtn>
            <BtnCard btnType="btnSee">See more</BtnCard>
            <BtnCard btnType="btnSave">Save</BtnCard>
         </BoxBtn>
      </Box>
   );
};
