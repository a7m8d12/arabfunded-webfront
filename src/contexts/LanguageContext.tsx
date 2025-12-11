import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How It Works',
    'nav.pricing': 'Pricing',
    'nav.rules': 'Rules',
    'nav.contact': 'Contact',
    'nav.getFunded': 'Get Funded',
    
    // Hero
    'hero.title': 'Funded Accounts for',
    'hero.titleHighlight': 'Middle East Traders',
    'hero.subtitle': 'Join thousands of traders who have unlocked their potential with ArabFunded. Get up to $100,000 in trading capital with our industry-leading profit splits.',
    'hero.cta.getFunded': 'Get Funded Now',
    'hero.cta.contact': 'Contact Us',
    'hero.stats.traders': 'Active Traders',
    'hero.stats.payouts': 'Total Payouts',
    'hero.stats.countries': 'Countries',
    
    // How It Works
    'how.title': 'How It Works',
    'how.subtitle': 'Your journey to becoming a funded trader in three simple steps',
    'how.step1.title': 'Take The Challenge',
    'how.step1.desc': 'Prove your trading skills by passing our evaluation phase. Trade with discipline and hit the profit targets.',
    'how.step2.title': 'Verification Phase',
    'how.step2.desc': 'Confirm your consistency in the verification phase with reduced targets. Show us you can trade responsibly.',
    'how.step3.title': 'Get Funded',
    'how.step3.desc': 'Trade with real capital up to $100,000. Keep up to 90% of your profits with bi-weekly payouts.',
    
    // Pricing
    'pricing.title': 'Choose Your Account Size',
    'pricing.subtitle': 'Select the funded account that matches your trading ambitions',
    'pricing.profitTarget': 'Profit Target',
    'pricing.dailyLoss': 'Daily Loss Limit',
    'pricing.maxDrawdown': 'Max Drawdown',
    'pricing.profitSplit': 'Profit Split',
    'pricing.buyNow': 'Start Challenge',
    'pricing.popular': 'Most Popular',
    'pricing.phase1': 'Phase 1',
    'pricing.phase2': 'Phase 2',
    
    // Rules
    'rules.title': 'Trading Rules',
    'rules.subtitle': 'Clear guidelines to help you succeed as a funded trader',
    'rules.profitTarget.title': 'Profit Targets',
    'rules.profitTarget.desc': 'Phase 1 requires 8% profit target. Phase 2 requires 5% profit target. No time limit to achieve targets.',
    'rules.dailyLoss.title': 'Daily Loss Limit',
    'rules.dailyLoss.desc': 'Maximum 5% daily loss based on your starting balance. Resets at midnight server time.',
    'rules.maxDrawdown.title': 'Maximum Drawdown',
    'rules.maxDrawdown.desc': '10% maximum drawdown from your initial balance. This is a hard limit that cannot be exceeded.',
    'rules.tradingDays.title': 'Minimum Trading Days',
    'rules.tradingDays.desc': 'Complete at least 5 trading days during each phase. A trading day is any day with at least one trade.',
    'rules.newsTrading.title': 'News Trading',
    'rules.newsTrading.desc': 'News trading is allowed. However, we recommend caution during high-impact economic events.',
    'rules.weekendHolding.title': 'Weekend Holding',
    'rules.weekendHolding.desc': 'Holding positions over the weekend is permitted but not recommended due to gap risk.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Have questions? Our team is here to help you start your funded trading journey',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.email': 'support@arabfunded.com',
    'contact.info.response': 'We typically respond within 24 hours',
    
    // Footer
    'footer.description': 'Empowering Middle East traders with funded accounts up to $100,000. Trade with confidence, keep your profits.',
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.refund': 'Refund Policy',
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'Risk Disclaimer: Trading involves substantial risk of loss. Past performance is not indicative of future results.',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.howItWorks': 'كيف يعمل',
    'nav.pricing': 'الأسعار',
    'nav.rules': 'القواعد',
    'nav.contact': 'اتصل بنا',
    'nav.getFunded': 'احصل على التمويل',
    
    // Hero
    'hero.title': 'حسابات ممولة لـ',
    'hero.titleHighlight': 'متداولي الشرق الأوسط',
    'hero.subtitle': 'انضم إلى آلاف المتداولين الذين أطلقوا إمكاناتهم مع عرب فاندد. احصل على رأس مال تداول يصل إلى 100,000 دولار مع أفضل نسب توزيع الأرباح.',
    'hero.cta.getFunded': 'احصل على التمويل الآن',
    'hero.cta.contact': 'اتصل بنا',
    'hero.stats.traders': 'متداول نشط',
    'hero.stats.payouts': 'إجمالي المدفوعات',
    'hero.stats.countries': 'دولة',
    
    // How It Works
    'how.title': 'كيف يعمل',
    'how.subtitle': 'رحلتك لتصبح متداولاً ممولاً في ثلاث خطوات بسيطة',
    'how.step1.title': 'خذ التحدي',
    'how.step1.desc': 'أثبت مهاراتك في التداول من خلال اجتياز مرحلة التقييم. تداول بانضباط وحقق أهداف الربح.',
    'how.step2.title': 'مرحلة التحقق',
    'how.step2.desc': 'أكد ثباتك في مرحلة التحقق بأهداف مخففة. أظهر لنا أنك تستطيع التداول بمسؤولية.',
    'how.step3.title': 'احصل على التمويل',
    'how.step3.desc': 'تداول برأس مال حقيقي يصل إلى 100,000 دولار. احتفظ بما يصل إلى 90% من أرباحك مع دفعات كل أسبوعين.',
    
    // Pricing
    'pricing.title': 'اختر حجم حسابك',
    'pricing.subtitle': 'اختر الحساب الممول الذي يتناسب مع طموحاتك في التداول',
    'pricing.profitTarget': 'هدف الربح',
    'pricing.dailyLoss': 'حد الخسارة اليومية',
    'pricing.maxDrawdown': 'الحد الأقصى للتراجع',
    'pricing.profitSplit': 'توزيع الأرباح',
    'pricing.buyNow': 'ابدأ التحدي',
    'pricing.popular': 'الأكثر شعبية',
    'pricing.phase1': 'المرحلة 1',
    'pricing.phase2': 'المرحلة 2',
    
    // Rules
    'rules.title': 'قواعد التداول',
    'rules.subtitle': 'إرشادات واضحة لمساعدتك على النجاح كمتداول ممول',
    'rules.profitTarget.title': 'أهداف الربح',
    'rules.profitTarget.desc': 'المرحلة 1 تتطلب هدف ربح 8%. المرحلة 2 تتطلب هدف ربح 5%. لا يوجد حد زمني لتحقيق الأهداف.',
    'rules.dailyLoss.title': 'حد الخسارة اليومية',
    'rules.dailyLoss.desc': 'حد أقصى 5% خسارة يومية بناءً على رصيدك الابتدائي. يتم إعادة التعيين عند منتصف الليل بتوقيت الخادم.',
    'rules.maxDrawdown.title': 'الحد الأقصى للتراجع',
    'rules.maxDrawdown.desc': '10% حد أقصى للتراجع من رصيدك الأولي. هذا حد صارم لا يمكن تجاوزه.',
    'rules.tradingDays.title': 'الحد الأدنى لأيام التداول',
    'rules.tradingDays.desc': 'أكمل 5 أيام تداول على الأقل خلال كل مرحلة. يوم التداول هو أي يوم به صفقة واحدة على الأقل.',
    'rules.newsTrading.title': 'التداول أثناء الأخبار',
    'rules.newsTrading.desc': 'التداول أثناء الأخبار مسموح به. ومع ذلك، نوصي بالحذر أثناء الأحداث الاقتصادية عالية التأثير.',
    'rules.weekendHolding.title': 'الاحتفاظ خلال عطلة نهاية الأسبوع',
    'rules.weekendHolding.desc': 'الاحتفاظ بالصفقات خلال عطلة نهاية الأسبوع مسموح به ولكن لا يُنصح به بسبب مخاطر الفجوات.',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'لديك أسئلة؟ فريقنا هنا لمساعدتك في بدء رحلة التداول الممول',
    'contact.name': 'الاسم الكامل',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.info.title': 'معلومات الاتصال',
    'contact.info.email': 'support@arabfunded.com',
    'contact.info.response': 'نرد عادةً خلال 24 ساعة',
    
    // Footer
    'footer.description': 'تمكين متداولي الشرق الأوسط بحسابات ممولة تصل إلى 100,000 دولار. تداول بثقة، واحتفظ بأرباحك.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.legal': 'قانوني',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.refund': 'سياسة الاسترداد',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'footer.disclaimer': 'تحذير المخاطر: التداول ينطوي على مخاطر كبيرة للخسارة. الأداء السابق ليس مؤشراً على النتائج المستقبلية.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
