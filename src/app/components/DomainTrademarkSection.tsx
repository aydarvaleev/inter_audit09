import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface DomainTrademarkSectionProps {
  data: FormData['domainTrademark'];
  onChange: (data: FormData['domainTrademark']) => void;
}

export function DomainTrademarkSection({ data, onChange }: DomainTrademarkSectionProps) {
  const updateField = (field: keyof FormData['domainTrademark'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        10. Домен и товарные знаки *
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Проверьте владельца домена, наличие свидетельства регистратора и возможный конфликт с товарными знаками.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="ownership-match"
          checked={data.ownershipMatch}
          onChange={(checked) => updateField('ownershipMatch', checked)}
          label="Владелец домена совпадает с владельцем школы"
        />
        
        <Checkbox
          id="registrar-certificate"
          checked={data.registrarCertificate}
          onChange={(checked) => updateField('registrarCertificate', checked)}
          label="Есть свидетельство регистратора"
        />
        
        <Checkbox
          id="no-trademark-conflict"
          checked={data.noTrademarkConflict}
          onChange={(checked) => updateField('noTrademarkConflict', checked)}
          label="Нет конфликта с товарными знаками"
        />
      </div>
      
      <div className="bg-amber-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-amber-900 mb-2">⚠️ Рекомендация:</p>
        <p className="text-sm text-amber-800">
          Проверьте домен через сервис WHOIS и базу товарных знаков ФИПС. Убедитесь, что название школы не нарушает чужие права.
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
          placeholder="Укажите, кто владеет доменом, есть ли риски конфликта товарных знаков"
        />
      </div>
    </section>
  );
}