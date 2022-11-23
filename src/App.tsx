import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/profile';
import SignUpStepTwo from './components/signUpStepTwo';
import SignUpStepTwoForUser from './components/signUpStepTwoForUser';


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signupsteptwo" element={<SignUpStepTwo />} />
      <Route path="/signupsteptwoforuser" element={<SignUpStepTwoForUser />} />
    </Routes>
  );
}
