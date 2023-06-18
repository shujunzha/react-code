import styled from "styled-components";
export const AppWrapper = styled.div`
  .section {
    border: 1px solid red;
    .title {
      font-size: 14px;
      color: blue;
      &:hover {
        color: brown;
      }
    }
    .contant {
      font-size: 20px;
      color: green;
      text-shadow: 2px 2px 4px green;
    }
  }
  .footer {
    border: 2px dotted pink;
    margin-top: 20px;
    p {
      font-style: italic;
    }
  }
`;
