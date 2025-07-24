import GenericButton from './GenericButton';

export default function TestPrerequisSection() {
  return (
    <div className="text-center text-white">
      <GenericButton
        text="Testez vos prérequis"
        bgColor="bg-violetIT hover:bg-violetIT-dark"
        textColor="text-white"
        // link="/test-pre-requis"
      />
    </div>
  );
}
