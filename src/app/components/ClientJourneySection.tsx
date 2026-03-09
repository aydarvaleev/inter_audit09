import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface ClientJourneySectionProps {
  data: FormData['clientJourney'];
  onChange: (data: FormData['clientJourney']) => void;
}

export function ClientJourneySection({ data, onChange }: ClientJourneySectionProps) {
  const updateField = (field: keyof FormData['clientJourney'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        5. Путь клиента
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Пройдите путь клиента: регистрация на вебинар, регистрация на курс, покупка продукта. Проверьте форму оплаты, онлайн-чек и реквизиты продавца.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="registration-form"
          checked={data.registrationForm}
          onChange={(checked) => updateField('registrationForm', checked)}
          label="Форма регистрации/оплаты проверена"
        />
        
        <Checkbox
          id="online-receipt"
          checked={data.onlineReceipt}
          onChange={(checked) => updateField('onlineReceipt', checked)}
          label="Онлайн-чек корректный"
        />
        
        <Checkbox
          id="executor-details-journey"
          checked={data.executorDetails}
          onChange={(checked) => updateField('executorDetails', checked)}
          label="Реквизиты исполнителя указаны корректно"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Вопросы для анализа:</p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Кто указан в чеке?</li>
          <li>Совпадает ли исполнитель услуги и получатель оплаты?</li>
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
          placeholder="Опишите выявленные проблемы на пути клиента"
        />
      </div>
    </section>
  );
}