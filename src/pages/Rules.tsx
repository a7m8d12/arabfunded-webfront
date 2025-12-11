import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Target, 
  TrendingDown, 
  BarChart3, 
  Calendar, 
  Newspaper, 
  Moon,
  AlertTriangle,
  CheckCircle,
  XCircle
} from 'lucide-react';

const Rules = () => {
  const { t, isRTL } = useLanguage();

  const rules = [
    {
      icon: Target,
      title: t('rules.profitTarget.title'),
      description: t('rules.profitTarget.desc'),
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: TrendingDown,
      title: t('rules.dailyLoss.title'),
      description: t('rules.dailyLoss.desc'),
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
    },
    {
      icon: BarChart3,
      title: t('rules.maxDrawdown.title'),
      description: t('rules.maxDrawdown.desc'),
      color: 'text-orange-400',
      bgColor: 'bg-orange-400/10',
    },
    {
      icon: Calendar,
      title: t('rules.tradingDays.title'),
      description: t('rules.tradingDays.desc'),
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
    },
    {
      icon: Newspaper,
      title: t('rules.newsTrading.title'),
      description: t('rules.newsTrading.desc'),
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Moon,
      title: t('rules.weekendHolding.title'),
      description: t('rules.weekendHolding.desc'),
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-400/10',
    },
  ];

  const allowed = [
    isRTL ? 'الروبوتات والتداول الآلي' : 'EAs & Automated Trading',
    isRTL ? 'جميع أساليب التداول' : 'All Trading Styles',
    isRTL ? 'التداول أثناء الأخبار' : 'News Trading',
    isRTL ? 'التحوط' : 'Hedging',
    isRTL ? 'التداول الليلي' : 'Overnight Holding',
    isRTL ? 'جميع أزواج العملات' : 'All Currency Pairs',
  ];

  const notAllowed = [
    isRTL ? 'نسخ التداول بين الحسابات' : 'Copy Trading Between Accounts',
    isRTL ? 'التحكيم عالي التردد' : 'High-Frequency Arbitrage',
    isRTL ? 'استغلال الفجوات' : 'Gap Trading Exploitation',
    isRTL ? 'التداول أثناء الأخطاء' : 'Trading During Errors',
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
              {t('rules.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('rules.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rules Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className={`w-14 h-14 rounded-xl ${rule.bgColor} flex items-center justify-center mb-4`}>
                  <rule.icon className={`w-7 h-7 ${rule.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{rule.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{rule.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-foreground text-center mb-12"
          >
            {isRTL ? 'مرجع سريع' : 'Quick Reference'}
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="px-6 py-4 text-start text-foreground font-semibold">
                      {isRTL ? 'القاعدة' : 'Rule'}
                    </th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold">
                      {isRTL ? 'المرحلة 1' : 'Phase 1'}
                    </th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold">
                      {isRTL ? 'المرحلة 2' : 'Phase 2'}
                    </th>
                    <th className="px-6 py-4 text-center text-foreground font-semibold">
                      {isRTL ? 'ممول' : 'Funded'}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/30">
                    <td className="px-6 py-4 text-muted-foreground">{isRTL ? 'هدف الربح' : 'Profit Target'}</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">8%</td>
                    <td className="px-6 py-4 text-center text-primary font-semibold">5%</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">—</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="px-6 py-4 text-muted-foreground">{isRTL ? 'الخسارة اليومية' : 'Daily Loss'}</td>
                    <td className="px-6 py-4 text-center text-foreground">5%</td>
                    <td className="px-6 py-4 text-center text-foreground">5%</td>
                    <td className="px-6 py-4 text-center text-foreground">5%</td>
                  </tr>
                  <tr className="border-b border-border/30">
                    <td className="px-6 py-4 text-muted-foreground">{isRTL ? 'الحد الأقصى للتراجع' : 'Max Drawdown'}</td>
                    <td className="px-6 py-4 text-center text-foreground">10%</td>
                    <td className="px-6 py-4 text-center text-foreground">10%</td>
                    <td className="px-6 py-4 text-center text-foreground">10%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-muted-foreground">{isRTL ? 'أيام التداول' : 'Trading Days'}</td>
                    <td className="px-6 py-4 text-center text-foreground">5+</td>
                    <td className="px-6 py-4 text-center text-foreground">5+</td>
                    <td className="px-6 py-4 text-center text-muted-foreground">—</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Allowed / Not Allowed */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Allowed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {isRTL ? 'مسموح' : 'Allowed'}
                </h3>
              </div>
              <ul className="space-y-3">
                {allowed.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not Allowed */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-red-400/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {isRTL ? 'غير مسموح' : 'Not Allowed'}
                </h3>
              </div>
              <ul className="space-y-3">
                {notAllowed.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass-card rounded-2xl p-6 border border-orange-400/30"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-orange-400/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  {isRTL ? 'تحذير مهم' : 'Important Notice'}
                </h4>
                <p className="text-muted-foreground">
                  {isRTL 
                    ? 'انتهاك أي من هذه القواعد سيؤدي إلى فشل التحدي أو إنهاء الحساب الممول. تأكد من فهم جميع القواعد قبل البدء.'
                    : 'Violating any of these rules will result in challenge failure or funded account termination. Make sure you understand all rules before starting.'
                  }
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Rules;
