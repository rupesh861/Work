import React , {useState}from 'react';
import Search from './searchFunctionality/search';
import { UsersListwithData,PostListwithData } from './higherOrderComponents/Data';
import { AuthProvider } from './useContext/AuthProvider';
import SearchWithDebounce from './Debounce/SearchWithDebounce';

import UserDetails from './useContext/UserDetails';
import Login from './useContext/Login';
import Logout from './useContext/Logout';
import axios from 'axios';
import Parent from './ChildToParent/Parent';
import Memo from './useMemo/Memo';
import Count from './useCallback/Count';
import Sum from './Currying/Sum';
import Example1 from './CallApllyBind/Example1';
import Circle from './JavascriptPractice/Practice2';
import Practice1 from './JavascriptPractice/Practice1';
import Pollyfills from './JavascriptPractice/Pollyfills';

const App =()=> {
  return (
    <>
     {/* <Search/> */}

     {/* <UsersListwithData/>
     <PostListwithData/> */}

     {/* //useContext */}
     {/* <AuthProvider>
      <UserDetails/>
      <Login></Login>
      <Logout/>
     </AuthProvider> */}
     {/* <SearchWithDebounce/> */}
     {/* <Sum/> */}
     
 {/* <Parent/> */}
 {/* <Memo/> */}
 {/* <Count></Count> */}
 {/* <Example1/> */}
 {/* <Circle/> */}
 {/* <Practice1/> */}
 <Pollyfills/>
    </>
  );
}

export default App;
