import { styled } from 'styled-components';

type HeadlineCardPropsType = {
   fontFamily?: string;
   fontWeight?: number;
   fonSize?: string;
   color: string;
   lineHeight?: string;
};

export const HeadlineCard = styled.h1<HeadlineCardPropsType>`
   position: absolute;
   inset: 200px 210px auto 20px;
   font-family: ${(props) => props.fontFamily || '"Inter Bold", sans-serif;'};
   font-weight: ${(props) => props.fontWeight || 700};
   font-size: ${(props) => props.fonSize || '16px'};
   color: ${(props) => props.color};
   line-height: ${(props) => props.lineHeight || 'none'};
`;
