// Interface for the LayoutPicker component
export interface LayoutPickerProps {
  currentLayout: number;
  updateLayout: (e:number) => void;
}
// LayoutPicker component
// This component allows the user to select between two different layouts.
const LayoutPicker = ({ currentLayout, updateLayout }: LayoutPickerProps) => {
  return (
    <div className={`h-1/6 w-full flex gap-2 text-alt opacity-70 ${currentLayout === 2 ? "px-8 items-start justify-start" : "px-6 items-end justify-end"}`}>
      Layout
      <div 
      onClick={() => updateLayout(1)}
      className={`cursor-pointer rounded text-xs h-6 w-8 flex items-center justify-center ${currentLayout === 1 ? "border-2":""}`}>
        1
      </div>
      <div 
      onClick={() => updateLayout(2)}
      className={`cursor-pointer rounded text-xs h-6 w-8 flex items-center justify-center ${currentLayout === 2 ? "border-2":""}`}>
        2
      </div>
    </div>
  );
};

export default LayoutPicker;
