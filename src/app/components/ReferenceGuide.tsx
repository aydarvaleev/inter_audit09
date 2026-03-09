import { BookOpen, FileText, Scale, Shield, UserCheck, Copyright, AlertTriangle, FileCheck, Users, Ban, Megaphone, Image, GraduationCap, Globe } from 'lucide-react';

export function ReferenceGuide() {
  return (
    <aside className="print:hidden">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 sticky top-4">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-5 h-5 text-blue-600" />
          <h3 className="font-semibold text-blue-900">Методичка для юридического аудита</h3>
        </div>
        
        <p className="text-xs text-gray-600 mb-3">
          Методичка для юридического аудита сайта онлайн-школы
        </p>
        
        <div className="bg-white rounded-lg p-3 mb-4 border-l-4 border-blue-500">
          <p className="text-xs font-medium text-gray-900 mb-1">Автор методички:</p>
          <p className="text-sm font-semibold text-blue-800">Зарина Эргашева</p>
          <p className="text-xs text-gray-600 mt-0.5">Кандидат юридических наук</p>
          <p className="text-xs text-gray-600">Юрист для онлайн-бизнеса</p>
        </div>
        
        <div className="space-y-3 text-sm max-h-[calc(100vh-280px)] overflow-y-auto pr-2">
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900 text-sm">1. Информация для потребителей</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Подвал сайта</li>
              <li>Реквизиты исполнителя</li>
              <li>Контактные данные</li>
              <li>Описание программ</li>
              <li>Сведения о преподавателях</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900 text-sm">2. Лицензирование</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 91 Закона «Об образовании»</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Образовательные программы</li>
              <li>Привлечение преподавателей</li>
              <li>Выдаваемые документы</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <FileCheck className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900 text-sm">3. Публичная оферта</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Предмет договора</li>
              <li>Порядок оплаты</li>
              <li>Порядок расторжения</li>
              <li>Ответственность сторон</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900 text-sm">4. Персональные данные</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">ФЗ-152 «О персональных данных»</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Политика обработки ПД</li>
              <li>Согласие на обработку ПД</li>
              <li>Чек-боксы в формах</li>
              <li>Уведомления о cookies</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-blue-600" />
              <h4 className="font-medium text-gray-900 text-sm">5. Путь клиента</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Форма регистрации/оплаты</li>
              <li>Онлайн-чек</li>
              <li>Реквизиты исполнителя</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-4 h-4 text-amber-600" />
              <h4 className="font-medium text-gray-900 text-sm">6. Запрещённая информация</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Иконки запрещённых соцсетей</li>
              <li>Англицизмы</li>
              <li>Обещания результата</li>
              <li>Обещания заработка</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Megaphone className="w-4 h-4 text-purple-600" />
              <h4 className="font-medium text-gray-900 text-sm">7. Реклама *</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Закон о рекламе</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Рекламные баннеры</li>
              <li>Лендинги и вебинарные страницы</li>
              <li>Маркировка рекламы (erid)</li>
              <li>Нереалистичные обещания</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Image className="w-4 h-4 text-green-600" />
              <h4 className="font-medium text-gray-900 text-sm">8. Авторские права *</h4>
            </div>
            <p className="text-xs text-gray-600 mb-2">Ст. 1225-1259 ГК РФ</p>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Фотографии и изображения</li>
              <li>Тексты и логотипы</li>
              <li>Договоры с авторами</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-4 h-4 text-indigo-600" />
              <h4 className="font-medium text-gray-900 text-sm">9. Права на программы *</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Договоры с преподавателями</li>
              <li>Договоры с авторами курсов</li>
              <li>Передача исключительных прав</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="w-4 h-4 text-teal-600" />
              <h4 className="font-medium text-gray-900 text-sm">10. Домен и товарные знаки *</h4>
            </div>
            <ul className="text-xs text-gray-600 space-y-1 ml-6 list-disc">
              <li>Владелец домена</li>
              <li>Свидетельство регистратора</li>
              <li>Конфликт товарных знаков</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg p-3 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <h4 className="font-medium text-gray-900 text-sm">11. Итоговая таблица рисков</h4>
            </div>
            <p className="text-xs text-gray-600">
              Сводная таблица всех выявленных рисков с нормами закона и рекомендациями
            </p>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-blue-200">
          <div className="bg-blue-100 rounded-lg p-3">
            <p className="text-xs text-blue-900 font-medium mb-1">💡 Совет</p>
            <p className="text-xs text-blue-700">
              Заполняйте разделы последовательно. Все данные автоматически сохраняются в браузере.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
