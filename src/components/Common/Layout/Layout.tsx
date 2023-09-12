import {ReactNode} from 'react';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {
    return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div``;
