import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface LicensingSectionProps {
  data: FormData['licensing'];
  onChange: (data: FormData['licensing']) => void;
}

export function LicensingSection({ data, onChange }: LicensingSectionProps) {
  const updateField = (field: keyof FormData['licensing'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        2. Лицензия и постлицензионные требования
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проанализируйте образовательные программы, привлечение преподавателей, выдаваемые документы и сведения об образовательной организации.
      </p>
      
      <div className="space-y-3 mb-6">
        <Checkbox
          id="educational-programs"
          checked={data.educationalPrograms}
          onChange={(checked) => updateField('educationalPrograms', checked)}
          label="Проверены образовательные программы"
        />
        
        <Checkbox
          id="teacher-involvement"
          checked={data.teacherInvolvement}
          onChange={(checked) => updateField('teacherInvolvement', checked)}
          label="Проверено привлечение преподавателей"
        />
        
        <Checkbox
          id="issued-documents"
          checked={data.issuedDocuments}
          onChange={(checked) => updateField('issuedDocuments', checked)}
          label="Проверены выдаваемые документы (сертификаты/удостоверения)"
        />
        
        <Checkbox
          id="organization-info"
          checked={data.organizationInfo}
          onChange={(checked) => updateField('organizationInfo', checked)}
          label="Проверены сведения об образовательной организации"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Вопросы для анализа:</p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Требуется ли лицензия?</li>
          <li>Выполняются ли требования после получения лицензии?</li>
        </ul>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Квалификация риска:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="not-required"
              checked={data.qualification === 'not-required'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Лицензия не требуется</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="required"
              checked={data.qualification === 'required'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Лицензия требуется</span>
          </label>
          
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="qualification"
              value="high-risk"
              checked={data.qualification === 'high-risk'}
              onChange={(e) => updateField('qualification', e.target.value)}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm">Высокий риск (требуется лицензия, но отсутствует)</span>
          </label>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание выявленных рисков:
        </label>
        <textarea
          value={data.riskDescription}
          onChange={(e) => updateField('riskDescription', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите, требуется ли лицензия, есть ли нарушения постлицензионных требований"
        />
      </div>
    </section>
  );
}