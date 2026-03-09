import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { PassportSection } from './components/PassportSection';
import { ConsumerInfoSection } from './components/ConsumerInfoSection';
import { LicensingSection } from './components/LicensingSection';
import { OfferSection } from './components/OfferSection';
import { PersonalDataSection } from './components/PersonalDataSection';
import { ClientJourneySection } from './components/ClientJourneySection';
import { ProhibitedInfoSection } from './components/ProhibitedInfoSection';
import { AdvertisingMarketingSection } from './components/AdvertisingMarketingSection';
import { CopyrightSection } from './components/CopyrightSection';
import { ProgramRightsSection } from './components/ProgramRightsSection';
import { DomainTrademarkSection } from './components/DomainTrademarkSection';
import { RiskTableSection } from './components/RiskTableSection';
import { ConclusionSection } from './components/ConclusionSection';
import { ActionButtons } from './components/ActionButtons';
import { ReferenceGuide } from './components/ReferenceGuide';

export interface FormData {
  // Паспорт проекта
  projectName: string;
  organizationForm: string;
  ogrnInn: string;
  region: string;
  businessModel: string;
  
  // 1. Информация для потр��бителей
  consumerInfo: {
    footerChecked: boolean;
    executorDetails: boolean;
    contactData: boolean;
    programDescription: boolean;
    teacherInfo: boolean;
    notes: string;
  };
  
  // 2. Лицензирование
  licensing: {
    educationalPrograms: boolean;
    teacherInvolvement: boolean;
    issuedDocuments: boolean;
    organizationInfo: boolean;
    qualification: 'not-required' | 'required' | 'high-risk' | '';
    riskDescription: string;
  };
  
  // 3. Публичная оферта
  offer: {
    contractSubject: boolean;
    paymentProcedure: boolean;
    terminationProcedure: boolean;
    partiesResponsibility: boolean;
    conclusion: string;
  };
  
  // 4. Персональные данные
  personalData: {
    hasPolicy: boolean;
    hasConsent: boolean;
    checkboxesCorrect: boolean;
    dataCollectionForms: boolean;
    cookiesNotification: boolean;
    riskDescription: string;
  };
  
  // 5. Путь клиента
  clientJourney: {
    registrationForm: boolean;
    onlineReceipt: boolean;
    executorDetails: boolean;
    notes: string;
  };
  
  // 6. Запрещённая/рискованная информация
  prohibitedInfo: {
    bannedSocialIcons: boolean;
    anglicisms: boolean;
    resultPromises: boolean;
    incomePromises: boolean;
    riskDescription: string;
  };
  
  // 7. Реклама
  advertisingMarketing: {
    advertisingBanners: boolean;
    landingPages: boolean;
    webinarPages: boolean;
    advertisingMessages: boolean;
    advertisingMarkup: boolean;
    advertisingIdentifiers: boolean;
    unrealisticPromises: boolean;
    riskDescription: string;
  };
  
  // 8. Авторские права
  copyright: {
    photosChecked: boolean;
    imagesChecked: boolean;
    textsChecked: boolean;
    logosChecked: boolean;
    authorContracts: boolean;
    acts: boolean;
    receipts: boolean;
    conclusion: string;
  };
  
  // 9. Права на образовательные программы
  programRights: {
    teacherContracts: boolean;
    authorContracts: boolean;
    exclusiveRights: boolean;
    usageRights: boolean;
    conclusion: string;
  };
  
  // 10. Домен и товарные знаки
  domainTrademark: {
    ownershipMatch: boolean;
    registrarCertificate: boolean;
    noTrademarkConflict: boolean;
    conclusion: string;
  };
  
  // Таблица рисков
  risks: Array<{
    risk: string;
    norm: string;
    level: string;
    consequences: string;
    recommendation: string;
  }>;
}

const initialFormData: FormData = {
  projectName: '',
  organizationForm: '',
  ogrnInn: '',
  region: '',
  businessModel: '',
  consumerInfo: {
    footerChecked: false,
    executorDetails: false,
    contactData: false,
    programDescription: false,
    teacherInfo: false,
    notes: '',
  },
  licensing: {
    educationalPrograms: false,
    teacherInvolvement: false,
    issuedDocuments: false,
    organizationInfo: false,
    qualification: '',
    riskDescription: '',
  },
  offer: {
    contractSubject: false,
    paymentProcedure: false,
    terminationProcedure: false,
    partiesResponsibility: false,
    conclusion: '',
  },
  personalData: {
    hasPolicy: false,
    hasConsent: false,
    checkboxesCorrect: false,
    dataCollectionForms: false,
    cookiesNotification: false,
    riskDescription: '',
  },
  clientJourney: {
    registrationForm: false,
    onlineReceipt: false,
    executorDetails: false,
    notes: '',
  },
  prohibitedInfo: {
    bannedSocialIcons: false,
    anglicisms: false,
    resultPromises: false,
    incomePromises: false,
    riskDescription: '',
  },
  advertisingMarketing: {
    advertisingBanners: false,
    landingPages: false,
    webinarPages: false,
    advertisingMessages: false,
    advertisingMarkup: false,
    advertisingIdentifiers: false,
    unrealisticPromises: false,
    riskDescription: '',
  },
  copyright: {
    photosChecked: false,
    imagesChecked: false,
    textsChecked: false,
    logosChecked: false,
    authorContracts: false,
    acts: false,
    receipts: false,
    conclusion: '',
  },
  programRights: {
    teacherContracts: false,
    authorContracts: false,
    exclusiveRights: false,
    usageRights: false,
    conclusion: '',
  },
  domainTrademark: {
    ownershipMatch: false,
    registrarCertificate: false,
    noTrademarkConflict: false,
    conclusion: '',
  },
  risks: [],
};

export default function App() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  // Загрузка данных из localStorage при монтировании
  useEffect(() => {
    const saved = localStorage.getItem('legal-audit-data');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка при загрузке данных:', e);
      }
    }
  }, []);

  // Автоматическое сохранение при изменении данных
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.setItem('legal-audit-data', JSON.stringify(formData));
    }, 500);
    return () => clearTimeout(timer);
  }, [formData]);

  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleClear = () => {
    if (confirm('Вы уверены, что хотите очистить все данные?')) {
      setFormData(initialFormData);
      localStorage.removeItem('legal-audit-data');
    }
  };

  const handlePrint = () => {
    // Временно меняем title для печати
    const originalTitle = document.title;
    document.title = ' '; // Пустой пробел вместо пустой строки
    
    // Используем setTimeout чтобы title успел измениться
    setTimeout(() => {
      window.print();
      
      // Восстанавливаем title после закрытия диалога печати
      setTimeout(() => {
        document.title = originalTitle;
      }, 100);
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-[1600px] mx-auto px-4 py-8 print:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6 print:grid-cols-1">
          {/* Левая колонка - Интерактивная форма */}
          <div>
            <div className="bg-white rounded-lg shadow-sm p-8 print:shadow-none">
              <PassportSection 
                data={formData}
                onChange={updateFormData}
              />
              
              <div className="print-hide-section">
                <ConsumerInfoSection 
                  data={formData.consumerInfo}
                  onChange={(consumerInfo) => updateFormData({ consumerInfo })}
                />
                
                <LicensingSection 
                  data={formData.licensing}
                  onChange={(licensing) => updateFormData({ licensing })}
                />
                
                <OfferSection 
                  data={formData.offer}
                  onChange={(offer) => updateFormData({ offer })}
                />
                
                <PersonalDataSection 
                  data={formData.personalData}
                  onChange={(personalData) => updateFormData({ personalData })}
                />
                
                <ClientJourneySection 
                  data={formData.clientJourney}
                  onChange={(clientJourney) => updateFormData({ clientJourney })}
                />
                
                <ProhibitedInfoSection 
                  data={formData.prohibitedInfo}
                  onChange={(prohibitedInfo) => updateFormData({ prohibitedInfo })}
                />
                
                <AdvertisingMarketingSection 
                  data={formData.advertisingMarketing}
                  onChange={(advertisingMarketing) => updateFormData({ advertisingMarketing })}
                />
                
                <CopyrightSection 
                  data={formData.copyright}
                  onChange={(copyright) => updateFormData({ copyright })}
                />
                
                <ProgramRightsSection 
                  data={formData.programRights}
                  onChange={(programRights) => updateFormData({ programRights })}
                />
                
                <DomainTrademarkSection 
                  data={formData.domainTrademark}
                  onChange={(domainTrademark) => updateFormData({ domainTrademark })}
                />
              </div>
              
              <RiskTableSection 
                risks={formData.risks}
                onChange={(risks) => updateFormData({ risks })}
              />
              
              <div className="print-hide-section">
                <ConclusionSection />
              </div>
            </div>
            
            {/* Информация о настройках печати */}
            <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4 print:hidden">
              <p className="text-sm text-gray-700">
                <strong>💡 Совет:</strong> Для правильного экспорта в PDF в диалоге печати отключите опции 
                "Колонтитулы" или "Верхние и нижние колонтитулы", чтобы убрать название страницы и URL.
              </p>
            </div>
            
            <ActionButtons 
              onClear={handleClear}
              onPrint={handlePrint}
            />
          </div>
          
          {/* Правая колонка - Справочная методичка */}
          <div className="reference-guide">
            <ReferenceGuide />
          </div>
        </div>
      </main>
    </div>
  );
}