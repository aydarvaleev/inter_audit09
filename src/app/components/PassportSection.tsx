import { FormData } from '../App';

interface PassportSectionProps {
  data: FormData;
  onChange: (data: Partial<FormData>) => void;
}

export function PassportSection({ data, onChange }: PassportSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        Паспорт проекта
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Наименование проекта:
          </label>
          <input
            type="text"
            value={data.projectName}
            onChange={(e) => onChange({ projectName: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите название проекта"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Форма (ООО / ИП / Самозанятый):
          </label>
          <input
            type="text"
            value={data.organizationForm}
            onChange={(e) => onChange({ organizationForm: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="ООО, ИП или Самозанятый"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            ОГРН / ИНН:
          </label>
          <input
            type="text"
            value={data.ogrnInn}
            onChange={(e) => onChange({ ogrnInn: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Введите ОГРН или ИНН"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Регион деятельности:
          </label>
          <input
            type="text"
            value={data.region}
            onChange={(e) => onChange({ region: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Укажите регион"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Описание модели работы:
          </label>
          <textarea
            value={data.businessModel}
            onChange={(e) => onChange({ businessModel: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            placeholder="Опишите модель работы онлайн-школы, какие услуги оказываются"
          />
        </div>
      </div>
    </section>
  );
}
