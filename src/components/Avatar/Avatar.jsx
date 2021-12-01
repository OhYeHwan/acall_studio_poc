import styled from "styled-components";

export const AvatarElement = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

const Avatar = ({ user, onClick }) => {
  return (
    <AvatarElement
      src={
        user.img === null
          ? require("../../img/default.png").default
          : require(`../../${user.img}`)
      }
      alt="avatar"
      onClick={onClick}
    />
  );
};

export default Avatar;
