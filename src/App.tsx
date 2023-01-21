import { Route, Routes } from 'react-router-dom';
import Home from './view/Home';
import Profile from './components/profile';
import SignUpCoach from './components/signUpStepTwoForCoach';
import NutritionCoaches from './view/allNutritionCoaches'
import Signupforgroup from './components/signUpStepTwoForUser';
import SignUpForUser from './components/signUpForUser';
import UserHome from './view/userHome';
import Diary from './view/diary';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signupCoach" element={<SignUpCoach />} />
      <Route path="/signupUser" element={<SignUpForUser />} />
      <Route path="/nutritioncoaches" element={<NutritionCoaches />} />
      <Route path="/signupforgroup" element={<Signupforgroup />} />
      <Route path="/userhome" element={<UserHome />} />
      <Route path="/diary" element={<Diary />} />
    </Routes>
  );
}
