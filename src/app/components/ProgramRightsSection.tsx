import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface ProgramRightsSectionProps {
  data: FormData['programRights'];
  onChange: (data: FormData['programRights']) => void;
}

export function ProgramRightsSection({ data, onChange }: ProgramRightsSectionProps) {
  const updateField = (field: keyof FormData['programRights'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        9. Права на образовательные программы *
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Запросите договоры с преподавателями и авторами курсов. Проверьте передачу исключительных прав и право использовать программу.
      </p>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Запрошены:</p>
        <div className="space-y-3">
          <Checkbox
            id="teacher-contracts-program"
            checked={data.teacherContracts}
            onChange={(checked) => updateField('teacherContracts', checked)}
            label="Договоры с преподавателями"
          />
          
          <Checkbox
            id="author-contracts-program"
            checked={data.authorContracts}
            onChange={(checked) => updateField('authorContracts', checked)}
            label="Договоры с авторами курсов"
          />
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm font-medium text-gray-700 mb-3">Проверены:</p>
        <div className="space-y-3">
          <Checkbox
            id="exclusive-rights"
            checked={data.exclusiveRights}
            onChange={(checked) => updateField('exclusiveRights', checked)}
            label="Передача исключительных прав"
          />
          
          <Checkbox
            id="usage-rights"
            checked={data.usageRights}
            onChange={(checked) => updateField('usageRights', checked)}
            label="Права использовать программу"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">💡 Важно:</p>
        <p className="text-sm text-blue-800">
          Убедитесь, что онлайн-школа имеет право использовать образовательные программы. В договорах должна быть прописана передача прав или лицензия на использование.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Вывод по разделу:
        </label>
        <textarea
          value={data.conclusion}
          onChange={(e) => updateField('conclusion', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите, есть ли договоры, переданы ли права, какие есть риски"
        />
      </div>
    </section>
  );
}