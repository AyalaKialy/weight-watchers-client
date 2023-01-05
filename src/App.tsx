import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/profile';
import SignUpGuide from './components/signUpStepTwoForCoach';
import NutritionCoaches from './components/allNutritionCoaches'
import SignUpStepTwoForUser from './components/signUpStepTwoForUser';


export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signupguide" element={<SignUpGuide />} />
      <Route path="/nutritioncoaches" element={<NutritionCoaches />} />
      <Route path="/signupsteptwoforuser" element={<SignUpStepTwoForUser />} />
    </Routes>
  );
}
