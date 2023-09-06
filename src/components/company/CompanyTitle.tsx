import styled from "@emotion/styled";
import { theme } from "@team-return/design-system";
import Image from "next/image";
import DotIcon from "@public/Menu.svg";
import useMoadl from "@/hook/useModal";

interface PropsType {
  business_number: string;
  company_name: string;
  company_profile_url: string;
  onClickRecruitments: () => void;
  onClickInterview: () => void;
}

export default function CompanyTitle({
  business_number,
  company_name,
  company_profile_url,
  onClickRecruitments,
  onClickInterview,
}: PropsType) {
  const { Modal, toggleModal, closeModal } = useMoadl();
  return (
    <Warpper>
      <div className="info">
        <ProfileImg>
          <Image
            width={76}
            height={76}
            src={company_profile_url}
            alt={company_name}
          />
        </ProfileImg>
        <Text>
          <p className="company_name">{company_name}</p>
          <p className="business_number">사업자 번호 : {business_number}</p>
        </Text>
      </div>
      <button onClick={toggleModal}>
        <Image width={24} height={24} src={DotIcon} alt="" />
        <Modal>
          <MenuModal>
            <MenuBtn
              onClick={() => {
                onClickRecruitments();
                closeModal();
              }}
            >
              모집의뢰서 조회
            </MenuBtn>
            <MenuBtn
              onClick={() => {
                onClickInterview();
                closeModal();
              }}
            >
              면접 후기 조회
            </MenuBtn>
          </MenuModal>
        </Modal>
      </button>
    </Warpper>
  );
}

const Warpper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .info {
    display: flex;
    gap: 24px;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border: none;
    cursor: pointer;
    position: relative;
  }
`;
const ProfileImg = styled.div`
  width: 76px;
  height: 76px;
  border-radius: 8px;
  box-shadow: 0px 4px 20px 0px rgba(112, 144, 176, 0.15);
  img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  .company_name {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 8px;
  }
  .business_number {
    font-size: 16px;
    font-weight: 500;
    color: ${theme.color.gray60};
  }
`;

const MenuModal = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  width: 150px;
  height: 100px;
  background-color: ${theme.color.gray10};
  border-radius: 16px 4px 16px 16px;
  padding: 10px;
  box-shadow: 0px 4px 20px 0px rgba(112, 144, 176, 0.15);
  display: flex;
  flex-direction: column;
`;

const MenuBtn = styled.div`
  flex: 1;
  font-size: 14px;
  color: ${theme.color.gray60};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
  :hover {
    color: ${theme.color.gray80};
  }
`;
