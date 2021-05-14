import styled from "styled-components";

const Profile = styled.main`
  width: 95%;
  max-width: 1500px;
  min-height: 90vh;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 3fr;

  @media screen and (max-width: 490px) {
    grid-template-columns: 1fr;
  }
`;

export default Profile;
