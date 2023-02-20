import styled from 'styled-components';


export const StyledSidebarHeader = styled.div`
height: 64px;
min-height: 64px;
display: flex;
align-items: center;
padding: 0 15px;

> div {
  width: 100%;
  overflow: hidden;
}
`;

export const StyledLogo = styled.img<{ rtl?: boolean }>`
width: 45px;
min-width: 45px;
height: 45px;
min-height: 45px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
color: white;
font-size: 24px;
font-weight: 700;
${({ rtl }) =>
  rtl
    ? `
    margin-left: 10px;
    margin-right: 4px;
    `
    : `
    margin-right: 10px;
    `}
`;