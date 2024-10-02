import { css, styled } from 'styled-components';

type BtnCardPropsType = {
   borderRadius?: string;
   width?: string;
   height?: string;
   fontFamily?: string;
   fontWeight?: number;
   fonSize?: string;
   lineHeight?: string;
   border?: string;
   background?: string;
   color?: string;
   backgroundHover?: string;
   borderHover?: string;
   colorHover?: string;
   btnType: 'btnSee' | 'btnSave';
};

export const BtnCard = styled.button<BtnCardPropsType>`
   border-radius: ${(props) => props.borderRadius || '5px'};
   width: ${(props) => props.width || '86px'};
   height: ${(props) => props.height || '30px'};
   font-family: ${(props) => props.fontFamily || '"Inter Medium", sans-serif'};
   font-weight: ${(props) => props.fontWeight || 700};
   font-size: ${(props) => props.fonSize || '10px'};
   line-height: ${(props) => props.lineHeight || '200%'};
   ${(props) =>
      props.btnType === 'btnSee' &&
      css<BtnCardPropsType>`
         border: ${(props) => props.border || 'none'};
         background: ${(props) => props.background || '#4e71fe'};
         color: ${(props) => props.color || '#fff'};

         &:hover {
            background: ${(props) => props.backgroundHover || '#0026bd'};
            color: ${(props) => props.colorHover || '#c4c4c4'};
         }
      `}
   ${(props) =>
      props.btnType === 'btnSave' &&
      css<BtnCardPropsType>`
         border: ${(props) => props.border || '2px solid #4e71fe'};
         background: ${(props) => props.background || '#fff'};
         color: ${(props) => props.color || '#4e71fe'};

         &:hover {
            background: ${(props) => props.backgroundHover || '#c4c4c4'};
            border: ${(props) => props.borderHover || '2px solid #0026bd'};
         }
      `}
`;
