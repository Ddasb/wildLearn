import styledComponents from 'styled-components';

type VoteType = {
    votes: number;
};

export const Badge = styledComponents.span`
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${({ votes }: VoteType) => (votes > 9 ? 'rgba(0, 100, 0, 0.3)' : 'rgba(175, 0, 0, 0.3)')};;
    color: #FFF;
    border-radius: 9999px;
    height: 20px;
    width: 20px;
`;
