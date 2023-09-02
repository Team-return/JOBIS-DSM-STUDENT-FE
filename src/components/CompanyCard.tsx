import { Icon, theme } from "@team-return/design-system";
import Image from "next/image";
import styled from "@emotion/styled";
import { CompanyInfo } from "@/util/Type/CompanyInfoType";

interface PropsType {
  company_list: CompanyInfo[];
}

export default function CompanyCard({ company_list }: PropsType) {
  return (
    <WarpperGrid>
      {company_list.map(({ logo_url, name, take, has_recruitment }, index) => (
        <Container key={index}>
          <Img>
            <Image width={0} height={0} src={logo_url} alt="" />
          </Img>
          <Info>
            <Name>{name}</Name>
            <Sales>연매출 {take}억원</Sales>
            {has_recruitment && (
              <Doc>
                <Icon icon="Document" color="gray60" />
              </Doc>
            )}
          </Info>
        </Container>
      ))}
    </WarpperGrid>
  );
}

const WarpperGrid = styled.div`
  width: 100%;
  display: grid;
  margin-top: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;
`;

const Container = styled.div`
  width: 100%;
  cursor: pointer;
  position: relative;
`;

const Img = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 60%;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    border-radius: 14px;
  }
`;

const Info = styled.div`
  position: relative;
`;

const Name = styled.p`
  ${theme.font.Heading6}
  font-weight: 700;
  color: ${theme.color.gray90};
  margin-top: 16px;
`;

const Sales = styled.p`
  ${theme.font.Body4}
  color: ${theme.color.gray60};
  margin-top: 8px;
`;

const Doc = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
`;
