import styled from 'styled-components';

const Styles = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
    border: 1px solid black;
    tr {
      :last-child {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
    }
    th,
    td {
      word-break: break-word;
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;
      :nth-of-type(1), :nth-of-type(3) {
        width: 15%;
      }
      :nth-of-type(2), :nth-of-type(6), :last-child {
        width: 10%;
      }
      :last-child {
        border-right: 0;
      }
    }
  }
`;

export default Styles;
