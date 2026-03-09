import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface OfferSectionProps {
  data: FormData['offer'];
  onChange: (data: FormData['offer']) => void;
}

export function OfferSection({ data, onChange }: OfferSectionProps) {
  const updateField = (field: keyof FormData['offer'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        3. Публичная оферта
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проверьте предмет договора, порядок оплаты, порядок расторжения и ответственность сторон.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="contract-subject"
          checked={data.contractSubject}
          onChange={(checked) => updateField('contractSubject', checked)}
          label="Предмет договора указан корректно"
        />
        
        <Checkbox
          id="payment-procedure"
          checked={data.paymentProcedure}
          onChange={(checked) => updateField('paymentProcedure', checked)}
          label="Порядок оплаты прописан"
        />
        
        <Checkbox
          id="termination-procedure"
          checked={data.terminationProcedure}
          onChange={(checked) => updateField('terminationProcedure', checked)}
          label="Порядок расторжения прописан"
        />
        
        <Checkbox
          id="parties-responsibility"
          checked={data.partiesResponsibility}
          onChange={(checked) => updateField('partiesResponsibility', checked)}
          label="Ответственность сторон прописана"
        />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-blue-900 mb-2">Вопросы для анализа:</p>
        <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
          <li>Понятно ли, какую услугу покупает клиент?</li>
          <li>Есть ли условия возврата?</li>
        </ul>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Вывод по разделу:
        </label>
        <textarea
          value={data.conclusion}
          onChange={(e) => updateField('conclusion', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Укажите выводы: есть ли оферта, соответствует ли она закону, какие есть риски"
        />
      </div>
    </section>
  );
}