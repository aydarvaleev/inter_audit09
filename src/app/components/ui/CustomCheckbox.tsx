interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
}

export function Checkbox({ id, checked, onChange, label }: CheckboxProps) {
  return (
    <div className="flex items-start gap-2">
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-0.5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
      />
      <label htmlFor={id} className="text-sm text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
}
