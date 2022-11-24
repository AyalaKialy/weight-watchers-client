import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/profile';
import SignUpGuide from './components/signUpGuide';
import NutritionCoaches from './components/allNutritionCoaches'

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/signupguide" element={<SignUpGuide />} />
      <Route path="/nutritioncoaches" element={<NutritionCoaches />} />
    </Routes>
  );
}
