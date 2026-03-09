import { FileText, Save } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md print:hidden">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8" />
          <div>
            <h1 className="text-2xl font-semibold">Интерактивная методичка</h1>
            <p className="text-blue-100 text-sm mt-1">
              Юридический аудит сайта онлайн-школы
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2 text-sm bg-blue-800/30 px-4 py-2 rounded-lg">
          <Save className="w-4 h-4" />
          <span>Все изменения автоматически сохраняются</span>
        </div>
      </div>
    </header>
  );
}
