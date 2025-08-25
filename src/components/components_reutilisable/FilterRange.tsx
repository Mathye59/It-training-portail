type Props = {
  label: string;
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
  step?: number;
};

const FilterRange: React.FC<Props> = ({
  label,
  min,
  max,
  value,
  onChange,
  step = 50,
}) => {
  return (
    <div className="mb-6">
      <label
        htmlFor="rangeSlider"
        className="block mb-2 font-semibold text-white"
      >
        {label} - € {value}
      </label>
      <input
        type="range"
        id="rangeSlider"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-turquoise"
      />
      <div className="flex justify-between text-sm mt-1 text-white/80">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default FilterRange;
