import { styled } from 'styled-components';

type ImageCardPropsType = {
   borderRadius?: string;
   width?: string;

};

export const ImageCard = styled.img<ImageCardPropsType>`
   position: absolute;
   inset: 10px;
	object-fit: cover;
   border: none;
   border-radius: ${(props) => props.borderRadius || '10px'};
   width: ${(props) => props.width || 'calc(100% - 20px)'};
   height: auto;
	max-height: 100%;
`;
