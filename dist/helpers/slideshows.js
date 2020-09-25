import styled from 'styled-components';
export const SlideshowWrapper = styled.div`
    height: ${p => p.height};
    position:relative;
    overflow:hidden;
`;
export const SlideWrapper = styled.div`
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    z-index:${p => p.index};
`;
export const Slide = styled.div`
    height:100%;
    width:100%;
`;