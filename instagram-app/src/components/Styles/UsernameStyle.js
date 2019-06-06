import styled from 'styled-components';

const UsernameStyle = styled.span `
    
    color: darkblue;

    ${props => props.type === 'usernameTitle' ? `font-weight:bold;` : null}
`;

export default UsernameStyle;
