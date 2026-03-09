import { FormData } from '../App';
import { Checkbox } from './ui/CustomCheckbox';

interface AdvertisingMarketingSectionProps {
  data: FormData['advertisingMarketing'];
  onChange: (data: FormData['advertisingMarketing']) => void;
}

export function AdvertisingMarketingSection({ data, onChange }: AdvertisingMarketingSectionProps) {
  const updateField = (field: keyof FormData['advertisingMarketing'], value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="mb-8 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-blue-900 mb-4 pb-2 border-b-2 border-blue-600">
        7. Реклама *
      </h2>
      
      <p className="text-sm text-gray-600 mb-4">
        Изучите рекламные баннеры, лендинги, вебинарные страницы и рекламные сообщения. Проверьте маркировку рекламы, рекламные идентификаторы и нереалистичные обещания.
      </p>
      
      <div className="space-y-3 mb-4">
        <Checkbox
          id="advertising-banners"
          checked={data.advertisingBanners}
          onChange={(checked) => updateField('advertisingBanners', checked)}
          label="Рекламные баннеры проверены"
        />
        
        <Checkbox
          id="landing-pages"
          checked={data.landingPages}
          onChange={(checked) => updateField('landingPages', checked)}
          label="Лендинги проверены"
        />
        
        <Checkbox
          id="webinar-pages"
          checked={data.webinarPages}
          onChange={(checked) => updateField('webinarPages', checked)}
          label="Вебинарные страницы проверены"
        />
        
        <Checkbox
          id="advertising-messages"
          checked={data.advertisingMessages}
          onChange={(checked) => updateField('advertisingMessages', checked)}
          label="Рекламные сообщения проверены"
        />
        
        <Checkbox
          id="advertising-markup"
          checked={data.advertisingMarkup}
          onChange={(checked) => updateField('advertisingMarkup', checked)}
          label="Маркировка рекламы присутствует"
        />
        
        <Checkbox
          id="advertising-identifiers"
          checked={data.advertisingIdentifiers}
          onChange={(checked) => updateField('advertisingIdentifiers', checked)}
          label="Рекламные идентификаторы проверены"
        />
        
        <Checkbox
          id="unrealistic-promises"
          checked={data.unrealisticPromises}
          onChange={(checked) => updateField('unrealisticPromises', checked)}
          label="Нереалистичные обещания отсутствуют"
        />
      </div>
      
      <div className="bg-purple-50 p-4 rounded-md mb-4">
        <p className="text-sm font-medium text-purple-900 mb-2">⚠️ Внимание:</p>
        <p className="text-sm text-purple-800">
          Согласно закону о рекламе, интернет-реклама должна быть маркирована и зарегистрирована в системе ОРД. Проверьте наличие erid-идентификаторов.
        </p>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Описание выявленных рисков:
        </label>
        <textarea
          value={data.riskDescription}
          onChange={(e) => updateField('riskDescription', e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[80px]"
          placeholder="Опишите нарушения в рекламных материалах"
        />
      </div>
    </section>
  );
}