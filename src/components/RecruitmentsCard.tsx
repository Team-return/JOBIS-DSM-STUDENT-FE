import { theme } from "@team-return/design-system";
import Image from "next/image";
import { styled } from "styled-components";
import { RecruitmentsInfo } from "@/util/Type/RecruitmentsType";
import BookMarkFull from "@public/BookMarkFull.svg";
import BookMarkUnFull from "@public/BookMarkUnFull.svg";

interface PropsType {
  recruitments_list: RecruitmentsInfo[];
}

export default function RecruitmentsCard({ recruitments_list }: PropsType) {
  return (
    <WarpperGrid>
      {recruitments_list.map(
        ({
          company_profile_url,
          company_name,
          train_pay,
          job_code_list,
          bookmarked,
        }) => (
          <Container onClick={() => {}}>
            <Img>
              <Image width={0} height={0} src={company_profile_url} alt="" />
            </Img>
            <Title>{job_code_list}</Title>
            <CompanyName>{company_name}</CompanyName>
            <TrainPay>실습수당 {train_pay}원</TrainPay>
            <BookMark
              onClick={(event) => {
                event.stopPropagation();
              }}
            >
              <Image
                src={bookmarked ? BookMarkFull : BookMarkUnFull}
                alt="북마크"
              />
            </BookMark>
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
  grid-template-columns: repeat(4, 1fr);
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
  padding-bottom: 80%;
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

const Title = styled.p`
  ${theme.font.Heading6}
  color: ${theme.color.gray90};
  margin-top: 16px;
`;

const CompanyName = styled.p`
  ${theme.font.Body3}
  color: ${theme.color.gray70};
  margin-top: 8px;
`;

const TrainPay = styled.p`
  ${theme.font.Body4}
  color: ${theme.color.gray90};
  margin-top: 24px;
`;

const BookMark = styled.button`
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
  cursor: pointer;
`;
