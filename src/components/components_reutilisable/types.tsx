export type Option = {
  label: string;
  value: string | number;
};

export type AsyncDropdownProps = {
  label?: string;
  placeholder?: string;
  value: Option | null;
  onChange: (value: Option | null) => void;
  loadOptions: (query?: string) => Promise<Option[]>;
  multiple?: boolean;
  debounceMs?: number;
};
