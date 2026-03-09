import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface CopyrightSectionProps {
  data: FormData['copyright'];
  onChange: (data: FormData['copyright']) => void;
}

export function CopyrightSection({ data, onChange }: CopyrightSectionProps) {
  const updateField = (field: keyof FormData['copyright'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        8. Авторские права *
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проанализируйте материалы сайта и запросите у клиента документы, подтверждающие права на использование контента.
      </p>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Проанализированы:</p>
        <div className="space-y-3">
          <Checkbox
            id="photos-checked"
            checked={data.photosChecked}
            onChange={(checked) => updateField('photosChecked', checked)}
            label="Фотографии проверены"
          />
          
          <Checkbox
            id="images-checked"
            checked={data.imagesChecked}
            onChange={(checked) => updateField('imagesChecked', checked)}
            label="Изображения проверены"
          />
          
          <Checkbox
            id="texts-checked"
            checked={data.textsChecked}
            onChange={(checked) => updateField('textsChecked', checked)}
            label="Тексты проверены"
          />
          
          <Checkbox
            id="logos-checked"
            checked={data.logosChecked}
            onChange={(checked) => updateField('logosChecked', checked)}
            label="Логотипы проверены"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Запрошены у клиента:</p>
        <div className="space-y-3">
          <Checkbox
            id="author-contracts"
            checked={data.authorContracts}
            onChange={(checked) => updateField('authorContracts', checked)}
            label="Договоры с авторами"
          />
          
          <Checkbox
            id="acts"
            checked={data.acts}
            onChange={(checked) => updateField('acts', checked)}
            label="Акты приёма-передачи"
          />
          
          <Checkbox
            id="receipts"
            checked={data.receipts}
            onChange={(checked) => updateField('receipts', checked)}
            label="Чеки на покупку контента"
          />
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Вывод по разделу:
        </label>
        <textarea
          value={data.conclusion}
          onChange={(e) => updateField('conclusion', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите, какие права защищены, какие документы отсутствуют, есть ли риски нарушения авторских прав"
        />
      </div>
    </section>
  );
}