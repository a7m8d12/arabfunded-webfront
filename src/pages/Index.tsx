import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Shield, Clock, Percent, Award } from 'lucide-react';

const Index = () => {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const trustFeatures = [
    { icon: Shield, title: isRTL ? 'تداول آمن' : 'Secure Trading', desc: isRTL ? 'منصة تداول موثوقة' : 'Trusted trading platform' },
    { icon: Clock, title: isRTL ? 'دعم 24/7' : '24/7 Support', desc: isRTL ? 'فريق دعم متاح دائماً' : 'Always available support' },
    { icon: Percent, title: isRTL ? '90% أرباح' : '90% Profit Split', desc: isRTL ? 'احتفظ بمعظم أرباحك' : 'Keep most of your profits' },
    { icon: Award, title: isRTL ? 'بدون حد زمني' : 'No Time Limit', desc: isRTL ? 'حقق أهدافك بالوقت المناسب' : 'Achieve targets at your pace' },
  ];

  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      
      {/* Trust Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-foreground font-semibold mb-1">{feature.title}</h4>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="hero-glow w-[600px] h-[600px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-15" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {isRTL ? 'مستعد لبدء رحلة التداول؟' : 'Ready to Start Your Trading Journey?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {isRTL 
                ? 'انضم إلى آلاف المتداولين الذين يثقون بنا. ابدأ تحديك اليوم واحصل على تمويل يصل إلى 100,000 دولار.'
                : 'Join thousands of traders who trust us. Start your challenge today and get funded up to $100,000.'
              }
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/pricing">
                <Button 
                  size="lg" 
                  className="bg-gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 hover:opacity-90 shadow-gold group"
                >
                  {t('hero.cta.getFunded')}
                  <ArrowIcon className={`w-5 h-5 ${isRTL ? 'mr-2' : 'ml-2'} group-hover:translate-x-1 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-border/50 text-foreground hover:bg-secondary/50 font-medium text-lg px-8 py-6"
                >
                  {isRTL ? 'تعرف على المزيد' : 'Learn More'}
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
