import Search from "component/common/Search";
import styled from "styled-components";


const UserSearch = () => {
  return (
    <UserSearchWrap>
      <UserSearchInner>
        
        <UserSerach>
          <Search placeholder="소환사명"/>
        </UserSerach>
      </UserSearchInner>
    </UserSearchWrap>
  )
}
export default UserSearch;

// styled
const UserSearchWrap = styled.div`
  height:100vh;
`;
const UserSearchInner = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:100%;
  height:100%;
`;

const UserSerach = styled.div`
  width:100%;
  max-width:600px;
`;
