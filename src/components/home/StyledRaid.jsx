import styled from 'styled-components';

const StyledRaid = styled.article`
    margin: 50px auto;
    overflow: hidden;
    width: 320px;
    background: #FFF;
    border: 1px solid rgb(25, 30, 42)!important;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
        a{
        color: inherit;
        text-decoration: none;
    }
    &:hover{
        box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.3);
    }
}
`;

export default StyledRaid;
