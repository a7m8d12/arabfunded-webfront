import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingCardProps {
  size: string;
  price: string;
  phase1Target: string;
  phase2Target: string;
  dailyLoss: string;
  maxDrawdown: string;
  profitSplit: string;
  isPopular?: boolean;
  index: number;
}

const PricingCard = ({
  size,
  price,
  phase1Target,
  phase2Target,
  dailyLoss,
  maxDrawdown,
  profitSplit,
  isPopular,
  index,
}: PricingCardProps) => {
  const { t, isRTL } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-2xl p-6 lg:p-8 ${
        isPopular
          ? 'bg-gradient-card border-2 border-primary shadow-gold-lg scale-105'
          : 'glass-card border border-border/50'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 text-primary-foreground fill-current" />
          <span className="text-primary-foreground text-sm font-semibold">{t('pricing.popular')}</span>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">{size}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center py-3 border-b border-border/30">
          <span className="text-muted-foreground text-sm">{t('pricing.profitTarget')} ({t('pricing.phase1')})</span>
          <span className="text-foreground font-semibold">{phase1Target}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border/30">
          <span className="text-muted-foreground text-sm">{t('pricing.profitTarget')} ({t('pricing.phase2')})</span>
          <span className="text-foreground font-semibold">{phase2Target}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border/30">
          <span className="text-muted-foreground text-sm">{t('pricing.dailyLoss')}</span>
          <span className="text-foreground font-semibold">{dailyLoss}</span>
        </div>
        <div className="flex justify-between items-center py-3 border-b border-border/30">
          <span className="text-muted-foreground text-sm">{t('pricing.maxDrawdown')}</span>
          <span className="text-foreground font-semibold">{maxDrawdown}</span>
        </div>
        <div className="flex justify-between items-center py-3">
          <span className="text-muted-foreground text-sm">{t('pricing.profitSplit')}</span>
          <span className="text-primary font-bold">{profitSplit}</span>
        </div>
      </div>

      {/* CTA */}
      <Button
        className={`w-full py-6 font-semibold ${
          isPopular
            ? 'bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold'
            : 'bg-secondary hover:bg-secondary/80 text-foreground'
        }`}
      >
        {t('pricing.buyNow')}
      </Button>

      {/* Features List */}
      <div className="mt-6 space-y-2">
        {['No Time Limit', 'Bi-weekly Payouts', 'Free Retry'].map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
            <Check className="w-4 h-4 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

interface PricingSectionProps {
  showHeader?: boolean;
}

const PricingSection = ({ showHeader = true }: PricingSectionProps) => {
  const { t } = useLanguage();

  const plans = [
    { size: '$5,000', price: '$49', phase1Target: '8%', phase2Target: '5%', dailyLoss: '5%', maxDrawdown: '10%', profitSplit: '80%' },
    { size: '$10,000', price: '$89', phase1Target: '8%', phase2Target: '5%', dailyLoss: '5%', maxDrawdown: '10%', profitSplit: '80%' },
    { size: '$25,000', price: '$179', phase1Target: '8%', phase2Target: '5%', dailyLoss: '5%', maxDrawdown: '10%', profitSplit: '85%', isPopular: true },
    { size: '$50,000', price: '$299', phase1Target: '8%', phase2Target: '5%', dailyLoss: '5%', maxDrawdown: '10%', profitSplit: '85%' },
    { size: '$100,000', price: '$549', phase1Target: '8%', phase2Target: '5%', dailyLoss: '5%', maxDrawdown: '10%', profitSplit: '90%' },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="pricing">
      <div className="hero-glow w-[500px] h-[500px] top-1/2 -translate-y-1/2 left-0 opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        {showHeader && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('pricing.title')}
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              {t('pricing.subtitle')}
            </p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
