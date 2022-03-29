import { ChangeEvent } from 'react';

type Props = {
  formData: Record<string, string>;
  handleChange: (event: ChangeEvent) => void;
  label: string;
  elname: string;
};

export const NTInput = ({ formData, handleChange, label, elname }: Props) => {
  return (
    <div className="col-start-2 col-end-6 md:col-start-5 md:col-end-9 mt-4">
      <label className="block">
        <span className="text-gray-700">{label}</span>
        <input
          type="text"
          className="
            mt-1
            block
            w-full
            rounded-md
            bg-gray-100
            border-transparent
            focus:border-gray-500 focus:bg-white focus:ring-0
          "
          placeholder=""
          required
          name={elname}
          value={formData[elname] || ``}
          onChange={handleChange}
          data-testid={elname}
        />
      </label>
    </div>
  );
};
