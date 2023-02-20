import styled from 'styled-components';
import { Avatar } from 'antd';

export const StyledNavbar = styled.nav`
    display: flex;
    height: 100%;
    padding: 7.5px 15px;
`;

export const StyledNavbarInner = styled.nav`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

export const StyledNavbarInnerLeft = styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    min-width: 0;
`;

export const StyledNavbarInnerRight = styled.div`
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: flex-end;
    min-width: 0;
`;

export const StyledNavbarItem = styled.div`
    padding-left: 10px;
    padding-right: 10px;
`;

export const StyledLogo = styled.img`
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
`;