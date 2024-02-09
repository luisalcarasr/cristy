type CounterSlotProps = {
  content?: string | number,
  label: string
};

export const Slot: React.FC<CounterSlotProps> = ({content, label}) => (
  <>
    { content !== undefined &&
      <div className="bg-gray-50 rounded-md inline-block p-1 m-1 shadow-sm w-16">
        <div className="text-xl text-center">{content}</div>
        <div className="text-sm text-center">{label}</div>
      </div>
    }
  </>
);
