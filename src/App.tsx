import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Tv2, Clock2 as Clock24, Film, Wifi, ChevronDown, ChevronUp, Facebook, Instagram, Twitter, Youtube, Star } from 'lucide-react';

function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const scrollToPlans = () => {
    const plansSection = document.querySelector('#plans');
    plansSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTestClick = () => {
    window.location.href = 'https://wa.me/+5511916881237?text=Olá! Gostaria de fazer o teste gratuito de 3 horas.';
  };

  const benefits = [
    { icon: <Tv2 size={40} />, title: '+2.000 Canais', description: 'Acesso a milhares de canais nacionais e internacionais' },
    { icon: <Clock24 size={40} />, title: 'Suporte 24h', description: 'Assistência técnica disponível todos os dias' },
    { icon: <Film size={40} />, title: 'Filmes & Séries', description: 'Conteúdo atualizado diariamente' },
    { icon: <Wifi size={40} />, title: 'Qualidade HD e 4K', description: 'Transmissão em alta definição' },
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Assinante há 1 ano",
      content: "Melhor serviço de IPTV que já usei! Qualidade excepcional e suporte sempre presente quando preciso.",
      rating: 5
    },
    {
      name: "Ana Santos",
      role: "Assinante há 6 meses",
      content: "Impressionada com a quantidade de canais e a estabilidade do serviço. Vale cada centavo!",
      rating: 5
    },
    {
      name: "Roberto Oliveira",
      role: "Assinante há 8 meses",
      content: "O acesso no celular de brinde foi um diferencial incrível. Agora posso assistir em qualquer lugar!",
      rating: 5
    }
  ];

  const plans = [
    { 
      name: 'Plano mensal',
      price: '25',
      period: 'mês',
      features: [
        '1 Tela',
        '+180.000 Conteúdo',
        'Qualidade HD/SD',
        'Ganha Acesso de Brinde no Celular',
        'Assista no Smartphone/Tablet',
        'Assista na Smart TV',
        'Programação Adultos [Opcional]',
        'Cortesias: Pacote Filmes e Séries',
        'Guia de Programação [EPG]'
      ],
      paymentLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808496006df201961bb2566c0fd5'
    },
    { 
      name: 'Plano trimestal',
      price: '60',
      period: 'trimestal',
      features: [
        '1 Tela',
        '+180.000 Conteúdo',
        'Qualidade HD/SD',
        'Ganha Acesso de Brinde no Celular',
        'Assista no Smartphone/Tablet',
        'Assista na Smart TV',
        'Programação Adultos [Opcional]',
        'Cortesias: Pacote Filmes e Séries',
        'Guia de Programação [EPG]'
      ],
      popular: true,
      paymentLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c9380849618f3eb01961bb3276600ee'
    },
    { 
      name: 'Plano anual',
      price: '150',
      period: 'anual',
      features: [
        '1 Tela',
        '+180.000 Conteúdo',
        'Qualidade HD/SD',
        'Ganha Acesso de Brinde no Celular',
        'Assista no Smartphone/Tablet',
        'Assista na Smart TV',
        'Programação Adultos [Opcional]',
        'Cortesias: Pacote Filmes e Séries',
        'Guia de Programação [EPG]'
      ],
      paymentLink: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=2c93808496006df901961bb3bc120f9f'
    },
  ];

  const faqs = [
    { question: 'Como funciona o teste gratuito?', answer: 'Oferecemos um teste de 3 horas para você experimentar nosso serviço. Entre em contato via WhatsApp para solicitar.' },
    { question: 'Preciso de algum equipamento especial?', answer: 'Não, nosso serviço funciona em Smart TVs, computadores, tablets e smartphones.' },
    { question: 'Qual a velocidade de internet necessária?', answer: 'Recomendamos uma conexão de 10Mbps ou superior para melhor experiência.' },
    { question: 'Posso usar em mais de um dispositivo?', answer: 'Sim, dependendo do plano escolhido, você pode usar em até 5 dispositivos simultaneamente.' },
  ];

  const handleResellerClick = () => {
    window.location.href = 'https://wa.me/+5511916881237';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://i.imgur.com/WKcwiJV.png" alt="Turbo X Logo" className="h-8 w-auto" />
            <span className="text-xl font-bold">Turbo X</span>
          </div>
          <button onClick={scrollToPlans} className="btn btn-primary">Assine Agora</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section pt-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Entretenimento <span className="text-orange-500">Sem Limites</span>
            </h1>
            <p className="text-xl mb-8 text-gray-300">
              Mais de 180.000 opções de entretenimento ao seu alcance em HD e 4K. Filmes, séries e eventos ao vivo onde e quando quiser.
            </p>
            <div className="space-y-4">
              <button onClick={handleTestClick} className="btn btn-primary text-lg w-full md:w-auto">
                Testar Agora por 3 Horas Grátis
              </button>
              <p className="text-orange-500 font-semibold">
                BÔNUS: Acesso GRÁTIS no celular em todos os planos!
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src="https://imgur.com/WKcwiJV.jpg" alt="IPTV Preview" className="rounded-lg shadow-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-black">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-gray-900"
              >
                <div className="text-orange-500 mb-4 flex justify-center">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">O que dizem nossos clientes</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900 p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} className="text-orange-500 fill-orange-500" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-orange-500 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="section bg-gradient-to-b from-gray-900 to-black">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12">Escolha seu Plano</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl p-8 ${plan.popular ? 'bg-orange-500' : 'bg-gray-900'}`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-black px-4 py-1 rounded-full text-sm">Mais Popular</span>
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">R$ {plan.price}</span>
                  <span className="text-gray-300">/{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Wifi size={20} className="flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a 
                  href={plan.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full btn ${plan.popular ? 'bg-black hover:bg-gray-900' : 'btn-primary'} block text-center`}
                >
                  Assinar Agora
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseller Section */}
      <section className="section bg-gradient-to-b from-black to-gray-900">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://i.imgur.com/2S79E2j.png" alt="Revendedor" className="rounded-lg shadow-2xl" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-6">Seja um Revendedor</h2>
            <p className="text-xl mb-8 text-gray-300">
              Entre para nossa equipe de revendedores e comece seu próprio negócio hoje mesmo.
              Oferecemos as melhores comissões do mercado e suporte completo.
            </p>
            <button onClick={handleResellerClick} className="btn btn-outline">Saiba Mais</button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-black">
        <div className="container max-w-3xl">
          <h2 className="text-4xl font-bold text-center mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-900 rounded-lg">
                <button
                  className="w-full px-6 py-4 flex justify-between items-center"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-semibold text-left">{faq.question}</span>
                  {activeFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {activeFaq === index && (
                  <div className="px-6 pb-4 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Sobre Nós</h3>
              <p className="text-gray-400">
                Oferecemos o melhor serviço de IPTV com qualidade e estabilidade.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#plans" className="hover:text-orange-500">Planos</a></li>
                <li><a href="#" className="hover:text-orange-500">Revendedores</a></li>
                <li><a href="#" className="hover:text-orange-500">Suporte</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>roberto.turbox@gmail.com</li>
                <li>
                  <a href="https://wa.me/5511916881237" className="hover:text-orange-500">
                    WhatsApp: (11) 91688-1237
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Redes Sociais</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-500"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500"><Twitter /></a>
                <a href="#" className="text-gray-400 hover:text-orange-500"><Youtube /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Turbo X. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;