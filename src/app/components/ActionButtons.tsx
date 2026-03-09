import { Printer, RotateCcw } from 'lucide-react';

interface ActionButtonsProps {
  onClear: () => void;
  onPrint: () => void;
}

export function ActionButtons({ onClear, onPrint }: ActionButtonsProps) {
  return (
    <div className="mt-6 flex gap-3 print:hidden">
      <button
        onClick={onClear}
        className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-colors"
      >
        <RotateCcw className="w-4 h-4" />
        Очистить форму
      </button>
      
      <button
        onClick={onPrint}
        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
      >
        <Printer className="w-4 h-4" />
        Печать / Экспорт PDF
      </button>
    </div>
  );
}