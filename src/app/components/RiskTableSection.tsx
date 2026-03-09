import { Plus, Trash2 } from 'lucide-react';
import { FormData } from '../App';

interface RiskTableSectionProps {
  risks: FormData['risks'];
  onChange: (risks: FormData['risks']) => void;
}

export function RiskTableSection({ risks, onChange }: RiskTableSectionProps) {
  const addRisk = () => {
    onChange([
      ...risks,
      {
        risk: '',
        norm: '',
        level: '',
        consequences: '',
        recommendation: '',
      },
    ]);
  };

  const removeRisk = (index: number) => {
    onChange(risks.filter((_, i) => i !== index));
  };

  const updateRisk = (index: number, field: keyof FormData['risks'][0], value: string) => {
    const updated = [...risks];
    updated[index] = { ...updated[index], [field]: value };
    onChange(updated);
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return '';
    }
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        11. Итоговая таблица аудита сайта
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Заполните таблицу выявленных рисков на основе проведённого аудита всех разделов.
      </p>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-4">
          <thead>
            <tr className="bg-blue-50">
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700 w-[25%]">
                Выявленный риск
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700 w-[15%]">
                Норма закона
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700 w-[15%]">
                Возможные последствия
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left text-sm font-medium text-gray-700 w-[20%]">
                Рекомендация
              </th>
              <th className="border border-gray-300 px-3 py-2 text-center text-sm font-medium text-gray-700 w-[5%] print:hidden">
                
              </th>
            </tr>
          </thead>
          <tbody>
            {risks.length === 0 ? (
              <tr>
                <td colSpan={5} className="border border-gray-300 px-3 py-8 text-center text-gray-500 text-sm">
                  Нажмите кнопку «Добавить риск» для добавления записей
                </td>
              </tr>
            ) : (
              risks.map((risk, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-2 py-2">
                    <textarea
                      value={risk.risk}
                      onChange={(e) => updateRisk(index, 'risk', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded resize-none"
                      placeholder="Описание риска"
                      rows={2}
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <input
                      type="text"
                      value={risk.norm}
                      onChange={(e) => updateRisk(index, 'norm', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded"
                      placeholder="ст. ХХ ФЗ №..."
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <textarea
                      value={risk.consequences}
                      onChange={(e) => updateRisk(index, 'consequences', e.target.value)}
                      className="w-full px-2 py-1 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded resize-none"
                      placeholder="Штраф, блокировка..."
                      rows={2}
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2">
                    <textarea
                      value={risk.recommendation}
                      onChange={(e) => updateRisk(index, 'recommendation', e.target.value)}
                      className="w-full px-2 py-2 border-0 focus:outline-none focus:ring-1 focus:ring-blue-500 rounded resize-none"
                      placeholder="Что нужно сделать"
                      rows={2}
                    />
                  </td>
                  <td className="border border-gray-300 px-2 py-2 text-center print:hidden">
                    <button
                      onClick={() => removeRisk(index)}
                      className="text-red-600 hover:text-red-800 p-1 hover:bg-red-50 rounded"
                      title="Удалить риск"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      <button
        onClick={addRisk}
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors print:hidden"
      >
        <Plus className="w-4 h-4" />
        Добавить риск
      </button>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-md">
        <p className="text-sm font-medium text-blue-900 mb-3">💡 Финальные вопросы после аудита:</p>
        <ol className="text-sm text-blue-800 space-y-2 list-decimal list-inside">
          <li>Какие ключевые риски есть у онлайн-школы?</li>
          <li>Какие юридические услуги можно предложить клиенту?</li>
          <li>Какие нарушения можно устранить быстро, а какие требуют сопровождения?</li>
        </ol>
      </div>
    </section>
  );
}
