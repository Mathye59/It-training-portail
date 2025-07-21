import GenericButton from './GenericButton';

export default function TestPrerequisSection() {
  return (
    <div className="text-center mt-10">
      <GenericButton
        text="Test pré-requis"
        color="bg-greenIT"
        textColor="text-blueDarkIT"
        to="/test-prerequis"
      />
    </div>
  );
}
