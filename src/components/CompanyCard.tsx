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
      {company_list.map(
        ({ company_profile_url, company_name, take }, index) => (
          <Container key={index}>
            <Img>
              <Image width={0} height={0} src={company_profile_url} alt="" />
            </Img>
            <Name>{company_name}</Name>
            <Sales>연매출 {take}억원</Sales>
            <IsDoc>
              <Icon icon="Document" color="gray60" />
            </IsDoc>
          </Container>
        )
      )}
    </WarpperGrid>
  );
}

const WarpperGrid = styled.div`
  width: 100%;
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3vw;
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
    border-radius: 10px;
    border: 1px solid ${theme.color.gray40};
  }
`;

const Name = styled.p`
  ${theme.font.Heading6}
  color: ${theme.color.gray90};
  margin-top: 16px;
`;

const Sales = styled.p`
  ${theme.font.Body4}
  color: ${theme.color.gray60};
  margin-top: 8px;
`;

const IsDoc = styled.div`
  width: 24px;
  height: 24px;
  position: absolute;
  bottom: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
`;
