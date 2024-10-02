import { styled } from 'styled-components';

type TextCardPropsType = {
   fontFamily?: string;
   fontWeight?: number;
   fonSize?: string;
   color: string;
   lineHeight?: string;
};

export const TextCard = styled.text<TextCardPropsType>`
   position: absolute;
   inset: 239px 20px auto 20px;
   font-family: ${(props) => props.fontFamily || '"Inter Medium", sans-serif'};
   font-weight: ${(props) => props.fontWeight || 500};
   font-size: ${(props) => props.fonSize || '12px'};
   color: ${(props) => props.color};
   line-height: ${(props) => props.lineHeight || '167%'};
`;
