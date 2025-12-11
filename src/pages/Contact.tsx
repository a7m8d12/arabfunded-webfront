import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, MessageSquare, Send, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isRTL ? 'تم إرسال الرسالة!' : 'Message Sent!',
      description: isRTL ? 'سنتواصل معك قريباً.' : "We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: isRTL ? 'البريد الإلكتروني' : 'Email',
      value: 'support@arabfunded.com',
      link: 'mailto:support@arabfunded.com',
    },
    {
      icon: MessageSquare,
      title: isRTL ? 'الدردشة المباشرة' : 'Live Chat',
      value: isRTL ? 'متاح على مدار الساعة' : 'Available 24/7',
      link: '#',
    },
    {
      icon: Clock,
      title: isRTL ? 'وقت الاستجابة' : 'Response Time',
      value: isRTL ? 'خلال 24 ساعة' : 'Within 24 hours',
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="py-20 relative overflow-hidden">
        <div className="hero-glow w-[500px] h-[500px] top-0 left-0 opacity-10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('contact.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                {t('contact.info.title')}
              </h2>

              {contactInfo.map((info, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-foreground font-semibold mb-1">{info.title}</h3>
                      {info.link ? (
                        <a href={info.link} className="text-primary hover:underline">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <h3 className="text-foreground font-semibold mb-4">
                  {isRTL ? 'تابعنا' : 'Follow Us'}
                </h3>
                <div className="flex gap-3">
                  {['Twitter', 'Instagram', 'Discord', 'Telegram'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      <span className="text-xs font-medium">{social.slice(0, 2)}</span>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <div className="glass-card rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.name')}
                      </label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                        placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.email')}
                      </label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                        placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.subject')}
                    </label>
                    <Input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary"
                      placeholder={isRTL ? 'موضوع الرسالة' : 'Message subject'}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.message')}
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-secondary/50 border-border/50 text-foreground placeholder:text-muted-foreground focus:border-primary min-h-[150px]"
                      placeholder={isRTL ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-gold text-primary-foreground font-semibold hover:opacity-90 shadow-gold"
                  >
                    {t('contact.send')}
                    <Send className={`w-5 h-5 ${isRTL ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-card rounded-2xl p-8 text-center"
          >
            <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {isRTL ? 'موقعنا' : 'Our Location'}
            </h3>
            <p className="text-muted-foreground">
              {isRTL ? 'دبي، الإمارات العربية المتحدة' : 'Dubai, United Arab Emirates'}
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
