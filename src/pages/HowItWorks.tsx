import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, CheckCircle, Wallet, ArrowRight, ArrowLeft, TrendingUp, Shield, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HowItWorks = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const steps = [
    {
      icon: Target,
      step: '01',
      title: t('how.step1.title'),
      description: t('how.step1.desc'),
      details: [
        isRTL ? 'هدف ربح 8%' : '8% Profit Target',
        isRTL ? 'حد خسارة يومي 5%' : '5% Daily Loss Limit',
        isRTL ? 'حد تراجع 10%' : '10% Max Drawdown',
        isRTL ? 'بدون حد زمني' : 'No Time Limit',
      ],
    },
    {
      icon: CheckCircle,
      step: '02',
      title: t('how.step2.title'),
      description: t('how.step2.desc'),
      details: [
        isRTL ? 'هدف ربح 5%' : '5% Profit Target',
        isRTL ? 'نفس قواعد المخاطر' : 'Same Risk Rules',
        isRTL ? '5 أيام تداول كحد أدنى' : '5 Minimum Trading Days',
        isRTL ? 'أثبت ثباتك' : 'Prove Consistency',
      ],
    },
    {
      icon: Wallet,
      step: '03',
      title: t('how.step3.title'),
      description: t('how.step3.desc'),
      details: [
        isRTL ? 'رأس مال حقيقي' : 'Real Capital',
        isRTL ? 'حتى 90% من الأرباح' : 'Up to 90% Profit Split',
        isRTL ? 'دفعات كل أسبوعين' : 'Bi-weekly Payouts',
        isRTL ? 'إمكانية التوسع' : 'Scaling Available',
      ],
    },
  ];

  const benefits = [
    { icon: TrendingUp, title: isRTL ? 'تداول بدون مخاطر' : 'Risk-Free Trading', desc: isRTL ? 'تداول برأس مالنا وليس رأس مالك' : 'Trade with our capital, not yours' },
    { icon: Shield, title: isRTL ? 'قواعد عادلة' : 'Fair Rules', desc: isRTL ? 'قواعد واضحة وشفافة للجميع' : 'Clear and transparent rules for all' },
    { icon: Clock, title: isRTL ? 'مرونة كاملة' : 'Full Flexibility', desc: isRTL ? 'تداول في أي وقت بدون قيود' : 'Trade anytime without restrictions' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="hero-glow w-[500px] h-[500px] top-0 right-0 opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('how.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('how.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-start">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="px-4 py-1 bg-primary/20 rounded-full text-primary font-bold">
                      {step.step}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {step.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className="flex-1 w-full max-w-md">
                  <div className="glass-card rounded-3xl p-10 border-gradient">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-12 h-12 text-primary" />
                    </div>
                    <div className="text-center">
                      <span className="text-6xl font-bold text-gradient-gold">{step.step}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
          >
            {isRTL ? 'لماذا عرب فاندد؟' : 'Why ArabFunded?'}
          </motion.h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {isRTL ? 'مستعد للبدء؟' : 'Ready to Begin?'}
            </h2>
            <p className="text-muted-foreground mb-8">
              {isRTL 
                ? 'اختر حجم حسابك وابدأ تحديك اليوم'
                : 'Choose your account size and start your challenge today'
              }
            </p>
            <Link to="/pricing">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 shadow-gold group"
              >
                {isRTL ? 'اختر حسابك' : 'Choose Your Account'}
                <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform`} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorks;
