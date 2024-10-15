import { styled } from 'styled-components';

type ImageCardPropsType = {
   borderRadius?: string;
   width?: string;
   height?: string;
};

export const ImageCard = styled.img<ImageCardPropsType>`
   position: absolute;
   inset: 10px 10px auto 10px;
   border: none;
   border-radius: ${(props) => props.borderRadius || '10px'};
   width: ${(props) => props.width || 'calc(100% - 20px)'};
   height: ${(props) => props.height || 'auto'};
`;
