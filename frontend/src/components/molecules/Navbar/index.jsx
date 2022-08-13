import React from "react";
import styled, {css} from "styled-components";
import Image from '../../atoms/Image'
import Button from '../../atoms/Button'
import logo from '../../../assets/temp_logo.png'
import move from "../../../common/move";
import logout from "../../pages/Home/logout";


const flexRow = css`
    ${({theme}) => css`
            ${theme.flex.rowCenter}
        `
    }
`
const StyledNavbar = styled.div`
    ${flexRow}
    width: 100%;
    background: ${({theme}) => css`${theme.colors['white']}`};
    padding: 0.5rem 1rem 0.5rem 0.3rem;
    justify-content: space-between;
    box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.1);
    height: 3.5rem;
`

const Buttons = styled.div`
    ${flexRow}
    justify-content: space-between;
    gap: 1rem;
`
const Navbar = ({url, navigate, isLogin, setIsLogin, imgSize, fontSize, mode, ...rest}) => {
    const text = isLogin ? '로그아웃' : '로그인';
    const confirmLogout = () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            setIsLogin(false);
            logout();
        }
    }
    const clickHandler = () => {
        isLogin ? confirmLogout() : move(navigate, '/login')
    }
    const moveToMypage = () => {
        move(navigate, '/mypage');
    }

    const moveToHome = () => {
        move(navigate, '/');
    }
    return <StyledNavbar {...rest}>
        <Image src={url} alt='logo' size={imgSize} onClick={moveToHome}/>
        <Buttons>
            {
                isLogin ? <Button fontSize={fontSize} mode={mode} onClick={moveToMypage} {...rest}>마이페이지</Button> : null
            }
            <Button fontSize={fontSize} mode={mode} onClick={clickHandler} {...rest}>{text}</Button>
        </Buttons>
    </StyledNavbar>
}

export default Navbar;