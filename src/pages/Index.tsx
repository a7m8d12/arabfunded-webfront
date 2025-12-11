import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Bell, Rocket, Shield, TrendingUp, Globe } from 'lucide-react';
import CandleBackground from '@/components/CandleBackground';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { language, setLanguage, isRTL } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');

  const handleNotify = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRTL ? 'تم التسجيل بنجاح!' : 'Successfully registered!',
      description: isRTL ? 'سنعلمك عند الإطلاق.' : "We'll notify you at launch.",
    });
    setEmail('');
  };

  const features = [
    {
      icon: TrendingUp,
      title: isRTL ? 'حسابات تداول ممولة' : 'Funded Trading Accounts',
      desc: isRTL ? 'رأس مال يصل إلى 100,000 دولار' : 'Capital up to $100,000',
    },
    {
      icon: Shield,
      title: isRTL ? 'قواعد عادلة' : 'Fair Rules',
      desc: isRTL ? 'شروط واضحة وشفافة' : 'Clear & transparent terms',
    },
    {
      icon: Rocket,
      title: isRTL ? 'دفعات سريعة' : 'Fast Payouts',
      desc: isRTL ? 'حتى 90% من الأرباح' : 'Up to 90% profit split',
    },
  ];

  return (
    <main className="min-h-screen relative overflow-hidden">
      <CandleBackground />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <header className="w-full py-6 px-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">AF</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Arab<span className="text-primary">Funded</span>
              </span>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="px-3 py-1.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/30 transition-colors"
              >
                {language === 'en' ? 'عربي' : 'English'}
              </button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              {/* Coming Soon Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-primary text-sm font-medium">
                  {isRTL ? 'قريباً' : 'Coming Soon'}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                <span className="text-foreground">ArabFunded</span>
                <br />
                <span className="text-gradient-purple">
                  {isRTL ? 'حسابك الممول يبدأ قريباً' : 'Your Future Funded Account Starts Soon'}
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
              >
                {isRTL 
                  ? 'نقوم ببناء منصة تمويل من الجيل التالي مصممة للمتداولين في الشرق الأوسط. سيتم الإعلان عن الإطلاق الرسمي قريباً.'
                  : 'We are building a next-generation funding platform designed for traders in the Middle East. Official launch will be announced soon.'
                }
              </motion.p>

              {/* Email Form */}
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                onSubmit={handleNotify}
                className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6"
              >
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={isRTL ? 'بريدك الإلكتروني' : 'Enter your email'}
                  className="bg-card/50 border-border/20 text-foreground placeholder:text-muted-foreground focus:border-primary h-12 flex-1"
                  required
                />
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-gradient-purple text-foreground font-semibold h-12 px-6 hover:opacity-90 shadow-purple group w-full sm:w-auto"
                >
                  <Bell className={`w-4 h-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                  {isRTL ? 'أعلمني عند الإطلاق' : 'Notify Me On Launch'}
                </Button>
              </motion.form>

              {/* Disclaimer */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-sm text-muted-foreground/60"
              >
                {isRTL 
                  ? 'عرب فاندد حالياً قيد التطوير — لا توجد حسابات متاحة بعد.'
                  : 'ArabFunded is currently under development — no accounts are available yet.'
                }
              </motion.p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center glass-card rounded-2xl p-8 md:p-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {isRTL ? 'ما الذي نبنيه' : 'What We\'re Building'}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {isRTL 
                  ? 'نقوم بإنشاء شركة بروب فيرم حديثة تقدم للمتداولين الوصول إلى حسابات تداول ممولة بقواعد عادلة، ودفعات عالية، وبيئة شفافة. يتم تطوير نظامنا لضمان الموثوقية والسرعة وتجربة تداول سلسة.'
                  : 'We are creating a modern prop firm offering traders access to funded trading accounts with fair rules, high payouts, and a transparent environment. Our system is being developed to ensure reliability, speed, and a smooth trading experience.'
                }
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-xl bg-accent/30"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-foreground font-semibold mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Placeholder */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="glass-card rounded-2xl p-8 border border-primary/20">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  {isRTL ? 'الأسعار' : 'Pricing'}
                </h2>
                <p className="text-muted-foreground">
                  {isRTL 
                    ? 'ستكون معلومات الأسعار متاحة عند الإطلاق. نحن نعمل على وضع اللمسات الأخيرة على نماذج التقييم وهياكل الحسابات.'
                    : 'Pricing information will be available at launch. We are finalizing our evaluation models and account structures.'
                  }
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-border/10">
          <div className="container mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AF</span>
              </div>
              <span className="text-lg font-bold text-foreground">
                Arab<span className="text-primary">Funded</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">
              ArabFunded © 2025 — {isRTL ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <p className="text-muted-foreground/60 text-xs">
              {isRTL ? 'هذه المنصة حالياً قيد الإنشاء.' : 'This platform is currently under construction.'}
            </p>
          </div>
        </footer>
      </div>

      {/* Glow Effects */}
      <div className="hero-glow w-[600px] h-[600px] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed pointer-events-none" />
      <div className="hero-glow w-[400px] h-[400px] bottom-0 right-0 opacity-10 fixed pointer-events-none" />
    </main>
  );
};

export default Index;
