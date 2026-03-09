import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface ConsumerInfoSectionProps {
  data: FormData['consumerInfo'];
  onChange: (data: FormData['consumerInfo']) => void;
}

export function ConsumerInfoSection({ data, onChange }: ConsumerInfoSectionProps) {
  const updateField = (field: keyof FormData['consumerInfo'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        1. Информация для потребителей
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проверьте наличие обязательной информации для потребителей на сайте онлайн-школы.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="footer-checked"
          checked={data.footerChecked}
          onChange={(checked) => updateField('footerChecked', checked)}
          label="Подвал сайта содержит необходимую информацию"
        />
        
        <Checkbox
          id="executor-details"
          checked={data.executorDetails}
          onChange={(checked) => updateField('executorDetails', checked)}
          label="Указаны реквизиты исполнителя"
        />
        
        <Checkbox
          id="contact-data"
          checked={data.contactData}
          onChange={(checked) => updateField('contactData', checked)}
          label="Указаны контактные данные"
        />
        
        <Checkbox
          id="program-description"
          checked={data.programDescription}
          onChange={(checked) => updateField('programDescription', checked)}
          label="Есть описание образовательных программ"
        />
        
        <Checkbox
          id="teacher-info"
          checked={data.teacherInfo}
          onChange={(checked) => updateField('teacherInfo', checked)}
          label="Указаны сведения о преподавателях"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Вопросы для анализа:</p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Кто является исполнителем услуги?</li>
          <li>Понятно ли потребителю, с кем заключается договор?</li>
          <li>Есть ли противоречия между страницами сайта?</li>
        </ul>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Примечания:
        </label>
        <textarea
          value={data.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите, какая информация отсутствует или указана некорректно"
        />
      </div>
    </section>
  );
}