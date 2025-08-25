import React from 'react';
import GenericButton from './GenericButton';

const TestPrerequisSection: React.FC = () => {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Testez vos prérequis"
        bgColor="bg-violetIT hover:bg-violetIT-dark"
        textColor="text-white"
        // link="/test-pre-requis" // ⚠️ respecte la casse exacte de ta route
      />
    </div>
  );
};

export default TestPrerequisSection;
