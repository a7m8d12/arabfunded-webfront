import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import PricingSection from '@/components/PricingSection';
import { Check, HelpCircle } from 'lucide-react';

const Pricing = () => {
  const { t, isRTL } = useLanguage();

  const faqs = [
    {
      q: isRTL ? 'كم من الوقت لدي لاجتياز التحدي؟' : 'How long do I have to pass the challenge?',
      a: isRTL ? 'لا يوجد حد زمني! خذ وقتك الكافي لتحقيق الأهداف.' : 'No time limit! Take as long as you need to hit the targets.',
    },
    {
      q: isRTL ? 'متى أستطيع سحب أرباحي؟' : 'When can I withdraw my profits?',
      a: isRTL ? 'يمكنك طلب السحب كل أسبوعين بعد أن تصبح متداولاً ممولاً.' : 'You can request withdrawals bi-weekly once you become a funded trader.',
    },
    {
      q: isRTL ? 'ما هي الأدوات المتاحة للتداول؟' : 'What instruments can I trade?',
      a: isRTL ? 'الفوركس، المؤشرات، السلع، والعملات الرقمية.' : 'Forex, Indices, Commodities, and Cryptocurrencies.',
    },
    {
      q: isRTL ? 'هل يمكنني استخدام الروبوتات؟' : 'Can I use EAs/Robots?',
      a: isRTL ? 'نعم، الروبوتات وأنظمة التداول الآلي مسموح بها.' : 'Yes, Expert Advisors and automated systems are allowed.',
    },
  ];

  const included = [
    isRTL ? 'منصة MetaTrader 4/5' : 'MetaTrader 4/5 Platform',
    isRTL ? 'لوحة تحكم المتداول' : 'Trader Dashboard',
    isRTL ? 'دعم على مدار الساعة' : '24/7 Support',
    isRTL ? 'بدون رسوم شهرية' : 'No Monthly Fees',
    isRTL ? 'إعادة تعيين مجانية عند الفشل الأول' : 'Free Retry on First Fail',
    isRTL ? 'شهادة متداول ممول' : 'Funded Trader Certificate',
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="hero-glow w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('pricing.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingSection showHeader={false} />

      {/* What's Included */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              {isRTL ? 'ما المضمن في كل خطة' : "What's Included in Every Plan"}
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-4 glass-card rounded-xl"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-12">
              <HelpCircle className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">
                {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
              </h2>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Pricing;
