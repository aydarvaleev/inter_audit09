import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface ProhibitedInfoSectionProps {
  data: FormData['prohibitedInfo'];
  onChange: (data: FormData['prohibitedInfo']) => void;
}

export function ProhibitedInfoSection({ data, onChange }: ProhibitedInfoSectionProps) {
  const updateField = (field: keyof FormData['prohibitedInfo'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        6. Запрещённая / рискованная информация
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проверьте наличие иконок запрещённых социальных сетей, англицизмов, обещаний результата и заработка.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="banned-social-icons"
          checked={data.bannedSocialIcons}
          onChange={(checked) => updateField('bannedSocialIcons', checked)}
          label="Обнаружены иконки запрещённых социальных сетей"
        />
        
        <Checkbox
          id="anglicisms"
          checked={data.anglicisms}
          onChange={(checked) => updateField('anglicisms', checked)}
          label="Обнаружены англицизмы (названия запрещённых соцсетей)"
        />
        
        <Checkbox
          id="result-promises"
          checked={data.resultPromises}
          onChange={(checked) => updateField('resultPromises', checked)}
          label="Обнаружены обещания результата"
        />
        
        <Checkbox
          id="income-promises"
          checked={data.incomePromises}
          onChange={(checked) => updateField('incomePromises', checked)}
          label="Обнаружены обещания заработка"
        />
      </div>
      
      <div className="bg-amber-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-amber-900 mb-2">Обратите внимание на формулировки:</p>
        <ul className="text-sm text-amber-800 space-y-1 list-disc list-inside">
          <li>«100% результат»</li>
          <li>«гарантированный доход»</li>
          <li>«№1 на рынке»</li>
        </ul>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание выявленных рисков:
        </label>
        <textarea
          value={data.riskDescription}
          onChange={(e) => updateField('riskDescription', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Опишите найденные на сайте рискованные формулировки и обещания"
        />
      </div>
    </section>
  );
}