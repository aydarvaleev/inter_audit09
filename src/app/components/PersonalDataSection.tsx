import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface PersonalDataSectionProps {
  data: FormData['personalData'];
  onChange: (data: FormData['personalData']) => void;
}

export function PersonalDataSection({ data, onChange }: PersonalDataSectionProps) {
  const updateField = (field: keyof FormData['personalData'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        4. Персональные данные
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проверьте политику обработки персональных данных, согласие на обработку ПД, чек-боксы при заполнении форм, формы сбора данных и уведомления о cookies.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="has-policy"
          checked={data.hasPolicy}
          onChange={(checked) => updateField('hasPolicy', checked)}
          label="Есть политика обработки персональных данных"
        />
        
        <Checkbox
          id="has-consent"
          checked={data.hasConsent}
          onChange={(checked) => updateField('hasConsent', checked)}
          label="Есть согласие на обработку ПД"
        />
        
        <Checkbox
          id="checkboxes-correct"
          checked={data.checkboxesCorrect}
          onChange={(checked) => updateField('checkboxesCorrect', checked)}
          label="Чек-боксы при заполнении форм корректны"
        />
        
        <Checkbox
          id="data-collection-forms"
          checked={data.dataCollectionForms}
          onChange={(checked) => updateField('dataCollectionForms', checked)}
          label="Формы сбора данных проверены"
        />
        
        <Checkbox
          id="cookies-notification"
          checked={data.cookiesNotification}
          onChange={(checked) => updateField('cookiesNotification', checked)}
          label="Есть уведомления о сборе cookies"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Вопросы для анализа:</p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Есть ли согласие на обработку ПД?</li>
          <li>Есть ли согласие на рекламные рассылки?</li>
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
          placeholder="Опишите нарушения в области обработки персональных данных"
        />
      </div>
    </section>
  );
}