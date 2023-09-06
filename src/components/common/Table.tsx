import { theme } from "@team-return/design-system";
import React from "react";
import styled from "styled-components";

function Table() {
  return (
    <Container>
      <TableContainer border={1}>
        <tr>
          <td className="key">대표</td>
          <td className="value">김하온</td>
        </tr>
        <tr>
          <td className="key detail">직원수</td>
          <td className="value detail">2222명</td>
        </tr>
        <tr>
          <td className="key">직원수</td>
          <td className="value">2222명</td>
        </tr>
        <tr>
          <td className="key">직원수</td>
          <td className="value">2222명</td>
        </tr>
        <tr>
          <td className="key">직원수</td>
          <td className="value">2222명</td>
        </tr>
      </TableContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 56px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid ${theme.color.gray40};
`;
const TableContainer = styled.table`
  width: 100%;
  border: none;
  border-collapse: collapse;
  tr {
    display: flex;
  }
  td {
    border: 1px solid ${theme.color.gray40};
    vertical-align: middle;
    min-height: 44px;
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  .key {
    width: 200px;
    justify-content: center;
    background-color: rgba(19, 92, 157, 0.08);
    color: ${theme.color.liteBlue};
  }
  .detail {
    height: 32px;
    min-height: 32px;
    color: ${theme.color.gray60};
    background-color: ${theme.color.gray20};
  }
  .value {
    flex: 1;
    padding: 0 40px;
    color: ${theme.color.gray70};
    background-color: ${theme.color.gray10};
  }
`;

export default React.memo(Table);
