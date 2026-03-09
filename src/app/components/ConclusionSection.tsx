import { Info } from 'lucide-react';

export function ConclusionSection() {
  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        Структура письменного заключения клиенту
      </h2>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-4">
        <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
          <li>Описание модели проекта</li>
          <li>Выявленные риски</li>
          <li>Правовая квалификация</li>
          <li>Потенциальные последствия</li>
          <li>Рекомендации и сроки устранения</li>
        </ol>
      </div>
      
      <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
        <div className="flex gap-3">
          <Info className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-amber-900 mb-2">Пример формулировки:</p>
            <p className="text-sm text-gray-700 italic">
              «На сайте размещены формулировки, указывающие на реализацию образовательной программы 
              с привлечением педагогических работников. В случае отсутствия лицензии существует риск 
              привлечения к административной ответственности по ст. 14.1 КоАП РФ.»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
