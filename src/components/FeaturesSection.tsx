import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, CheckCircle, Wallet } from 'lucide-react';

const FeaturesSection = () => {
  const { t, isRTL } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('how.step1.title'),
      description: t('how.step1.desc'),
      step: '01',
    },
    {
      icon: CheckCircle,
      title: t('how.step2.title'),
      description: t('how.step2.desc'),
      step: '02',
    },
    {
      icon: Wallet,
      title: t('how.step3.title'),
      description: t('how.step3.desc'),
      step: '03',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('how.title')}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t('how.subtitle')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="glass-card rounded-2xl p-8 h-full border-gradient hover:border-primary/30 transition-all duration-300 group-hover:-translate-y-1">
                {/* Step Number */}
                <div className="absolute -top-3 right-6 px-3 py-1 bg-primary rounded-full">
                  <span className="text-primary-foreground text-sm font-bold">{feature.step}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
