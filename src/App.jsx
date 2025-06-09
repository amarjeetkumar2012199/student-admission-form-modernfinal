import React from 'react';
import StudentForm from './components/StudentForm';

function App() {
  return (
    <div className='min-h-screen bg-gray-100 p-4'>
      <h1 className='text-2xl font-bold text-center mb-6'>Student Admission Form</h1>
      <StudentForm />
    </div>
  );
}

export default App;